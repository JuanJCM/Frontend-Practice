import React from "react";
import safelogo from "../images/safelogo.png";
const SliderPage = () => {
  return (
    <div className="SliderPage">
      <div className="leftside">
        <div className="title">
          <h1 className="bluetitle">A Bar to Match</h1>
          <h1>Every Mood</h1>
        </div>
        <div className="textmood">
          <p>
            With unlimited drinks in as many as 15 bars per resort, nobody knows
            how to party like Beaches.
          
          
            By day, swim-up bars, oceanside bars, and beachside divans invite
            you to indulge in chilled rum
          
          
            concoctions and any beverage of your choice. By night, go bar
            hopping or dance barefoot to the{" "}
          
          
            exotic rhythms of island music at beachside watering holes-all under
            a canopy of stars.
          </p>
        </div>
      </div>
      <div className="rightside">
        {/*Aqui iria el logo */}
        <div className="blackbox">
          <div className="lineborder">
            <img className="safeLogo" src={safelogo} alt="safeLogo" />
            <p className="textinlogo">
              And all Beaches bartenders are trained and certified by ServSafe
              <sup>
                <span>&#174;</span>
              </sup>
              , a rigorous food and beverage safety training and certification
              program administered by the National Restaurant Association
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SliderPage;
