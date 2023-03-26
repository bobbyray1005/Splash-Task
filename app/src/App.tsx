import React from "react";
import Chat from "./components/Chat";
import Join from "./components/Join";
import Info from "./components/Info";
import Graph from "./components/Graph";
import Start from "./components/Start";
import Ranking from "./components/Ranking";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-4 position-relative">
            <Join />
            <Start />
          </div>

          <div className="col-12 col-md-8">
            <Info />
            <Graph />
          </div>
        </div>

        <div className="row mt-3">
          <Ranking />
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;
