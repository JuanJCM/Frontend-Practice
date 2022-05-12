import React from "react";
import Header from "./Header";
import FrontPage from "./FrontPage";
import SponsorPage from "./SponsorPage";

const MainPage = () => {
  return (
    <div className="Header">
      <div>
        <Header />
      </div>
      <div>
        <FrontPage/>
      </div>
      <div>
        <SponsorPage/>
      </div>
    </div>
  );
};
export default MainPage;
