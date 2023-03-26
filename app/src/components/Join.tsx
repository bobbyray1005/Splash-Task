import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "../store";
import { default as socket } from "./ws";

function Join() {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const userName = useSelector((state: any) => state.reduxStore.userName);

  const submitNickname = () => {
    socket.emit("user nickname", nickname);
    dispatch(setUserName(nickname));
  };

  useEffect(() => {
    setIsButtonDisabled(3 > nickname.length);
  }, [nickname]);

  return (
    <div className={`card-box join-box ${userName ? "d-none" : ""}`}>
      <div className="join-title">Welcome</div>

      <form className="">
        <div className="join-hint">Please Insert Your Name</div>
        <input
          type="text"
          onChange={(e) => setNickname(e.target.value)}
          value={nickname}
          className=""
          placeholder=""
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            submitNickname();
          }}
          type="button"
          disabled={isButtonDisabled}
        >
          Accept
        </button>
      </form>
    </div>
  );
}

export default Join;
