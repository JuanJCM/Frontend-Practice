import React from "react";
import twinoaks from "../images/twin-oaks.png";
import appleton from "../images/appleton.png";
import backgroundwine from "../images/backgroundwine.png";

const InlcudedSection = () => {
  return (
    <div className="containerliquor">
      <div className="leftsidesection">
        <div className="winecontainer">
          <p className="includedtext">INCLUDED</p>
          <img
            src={backgroundwine}
            alt="backgroundwine"
            className="backgroundwine"
          />
          <div className="bottleimg"></div>
        </div>
        <div className="descriptionarea">
          <img src={twinoaks} alt="logos1" className="logos1" />
          <h2 className="textincluded">Premium House Wines</h2>
          <p className="includedcontent2">
            We've raised the bar by partnering with Robert Mondavi Twin Oaks
            <sup>
              <span>&#174;</span>
            </sup>
            . Selected for Sandals Resorts, there are 6 varietals to choose
            from, each one complementing our gourmet dining perfectly.
          </p>
          <h4 className="learnMorecolor">
            LEARN MORE <span className="bluebutton">&#9658;</span>
          </h4>
        </div>
      </div>
      <div className="rightsidesection">
        <div className="backgroundimgrum">
          <p className="includedtext">INCLUDED</p>
        </div>
        <div className="descriptionarea">
          <img src={appleton} alt="logos2" className="logos2" />
          <h2 className="textincluded2">
            Appleton
            <sup className="transparentsup">
              <span>&#174;</span>
            </sup>
            Estate Jamaica Rum
          </h2>
          <p className="includedcontent2">
            An iconic Jamaica product and internationally acclaimed rum brand,
            is poured at all Beaches Resorts throughout the Caribbean.
          </p>
          <h4 className="learnMorecolor">
            LEARN MORE <span className="bluebutton">&#9658;</span>
          </h4>
        </div>
      </div>
    </div>
  );
};
export default InlcudedSection;
