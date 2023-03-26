import React from "react";
import { useSelector } from "react-redux";

function Info() {
  const userName = useSelector((state: any) => state.reduxStore.userName);
  const userBalance = useSelector((state: any) => state.reduxStore.balance);

  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <div className="card-box info-box">
          <div className="info-emoji">🏅</div>
          <div className="info-data">
            {userName ? userBalance.toLocaleString("en-US") : ""}
          </div>
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div className="card-box info-box">
          <div className="info-emoji">🧑</div>
          <div className="info-data">{userName}</div>
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div className="card-box info-box">
          <div className="info-emoji">⏱</div>
          <div className="info-data">{userName ? "21:30" : ""}</div>
        </div>
      </div>
    </div>
  );
}

export default Info;
