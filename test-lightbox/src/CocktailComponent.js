import React from "react";
import "../src/Modal.css";
import lines from "../src/images/format-justify.svg";
const Modal = () => {
  return (
    <div className="swimupContainer">
      <div className="backgroundContainer">
        <h1 className="bigTitle">SWIM-UP</h1>
        <h4 className="smallTitle">POOL BARS</h4>
        <div className="checkincontainer">
          <div className="blackRectanglesection">
            <p className="parragraphtitle">SWIM-UP POOL BARS</p>
            <img src={lines} alt="lines" className="lines" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
