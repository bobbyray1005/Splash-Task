const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const path = require("path");

const PORT = process.env.PORT || 8080;

let usersConnected = new Map();

io.on("connection", (socket) => {
  let { id } = socket.client;

  socket.on("user nickname", (nickname) => {
    //  1) When the CLIENT sends the 'nickname', we store the 'nickname',
    //  'socket.client.id', and 'socket.id in a Map structure
    usersConnected.set(nickname, [socket.client.id, socket.id]);

    //  2) Send list with connected sockets
    io.emit("users-on", Array.from(usersConnected.keys()));

    //  3) Send data about this user
    io.emit("user-data", [nickname, socket.client.id]);

    //  4) Send test messages from bot
    botMessages();
  });

  function botMessages() {
    setTimeout(() => {
      socket.emit("chat message", {
        nickname: "CPU 1",
        msg: "hi guys",
      });
    }, 2000);

    setTimeout(() => {
      socket.emit("chat message", {
        nickname: "CPU 2",
        msg: "hi men",
      });
    }, 5000);

    setTimeout(() => {
      socket.emit("chat message", {
        nickname: "CPU 1",
        msg: "I could play this game for hours!",
      });
    }, 8000);
  }

  socket.on("chat message", ({ nickname, msg }) => {
    socket.broadcast.emit("chat message", { nickname, msg });
  });

  socket.on("disconnect", () => {
    let tempUserNickname;

    for (let key of usersConnected.keys()) {
      if (usersConnected.get(key)[0] === id) {
        tempUserNickname = key;
        usersConnected.delete(key);
        break;
      }
    }
    // Send to client the updated list with users connected
    io.emit("users-on", Array.from(usersConnected.keys()));

    // Send to client the nickname of the user that was disconnected
    socket.broadcast.emit("user-disconnected", tempUserNickname);
  });
});

server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));
