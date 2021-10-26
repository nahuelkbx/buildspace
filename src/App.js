import * as React from "react";
// import { ethers } from "ethers";
import "./App.css";

export default function App() {
  const wave = () => {};

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header"> Hey there!</div>

        <div className="bio">I am Nahuel and I love dogs</div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
