import React from "react";
import Header from "./Header";
import FrontPage from "./FrontPage";
import SponsorPage from "./SponsorPage";
import SliderPage from "./SliderPage";

const MainPage = () => {
  return (
    <div className="Header">
      <div>
        <Header />
      </div>
      <div className="Frontpage">
        <FrontPage/>
      </div>
      <div className="Sponsorpage">
        <SponsorPage/>
      </div>
      <div className="Sliderpage">
        <SliderPage/>
      </div>
    </div>
  );
};
export default MainPage;
