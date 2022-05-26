import React from "react";
import "../src/Modal.css";
import cocktail from "../src/images/rum.png";

const Modal = () => {
  return (
    <div>
      <div className="backgroundimg">
        <p className="includedtext">Included</p>
        <div className="bottleimg"></div>
      </div>
      <div className="descriptionarea">
        <h2>Premium House Wines</h2>
        <p>We've raised the bar by partnering with Robert Mondavi Twin Oaks. Selected for Sandals Resorts, there are 6 varietals to choose from, each one complementing our gourmet dining perfectly</p>
        <h4>Learn More</h4>
      </div>
    </div>
  );
};
export default Modal;
