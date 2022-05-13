import React from "react";

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
            With unlimited drinks in as many as 15 bars per resort, nobody
            knows how to party like Beaches.
          </p>
          <p>
            By day, swim-up bars, oceanside bars, and beachside divans invite
            you to indulge in chilled rum
          </p>
          <p>
            concoctions and any beverage of your choice. By night, go bar
            hopping or dance barefoot to the{" "}
          </p>
          <p>
            exotic rhythms of island music at beachside watering holes-all under
            a canopy of stars.
          </p>
        </div>
      </div>
      <div className="rightside">
            {/*Aqui iria el logo */}
            <h1>This is the right side.</h1>
      </div>
      <div className="sliderSection">
            <h1>Aqui deberia de ir un slider, si tan solo tuviera uno</h1>
      </div>
    </div>
  );
};
export default SliderPage;
