import io from "socket.io-client";
const ws = (io as any)(); // io();

export default ws;
