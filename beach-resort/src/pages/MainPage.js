import React from "react";
import Header from "./Header";
import FrontPage from "./FrontPage";
import SponsorPage from "./SponsorPage";
import SliderPage from "./SliderPage";
import CocktailPage from "./CocktailPage";
import FooterPage from "./FooterPage";
import EndPage from "./EndPage";
import SliderSection from "./SliderSection";

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
      <div className="SliderSection">
        <SliderSection/>
      </div>
      <div className="CocktailPage">
        <CocktailPage/>
      </div>
      <div className="FooterPage">
        <FooterPage/>
      </div>
      <div className="EndPage">
        <EndPage/>
      </div>
    </div>
  );
};
export default MainPage;
