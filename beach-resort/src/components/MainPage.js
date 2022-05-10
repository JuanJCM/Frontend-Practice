import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="header">
      <div className="Appbar">
        <input placeholder="Search" />
        <p>Local Tours</p>
        <p>
          Red Lane<sup>a</sup>Spa
        </p>
        <p>Before You Arrive</p>
        <p>Already Booked?</p>
      </div>
      <div className="Titlebar">
        <h1 className="Logo">Beaches Resort</h1>
        <div className="booknowbutton">
          <h1>BOOK NOW</h1>
          <h5>CHECK RATES & AVAILABILITY</h5>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
