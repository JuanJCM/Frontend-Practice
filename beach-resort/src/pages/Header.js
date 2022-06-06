import React from "react";
import logo from "../images/beaches-blanco.png";
import circles from "../icons/ellipsis-v.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="Appbar">
        <p className="Search">
          Search... <span className="magnifyingglass">&#8981;</span>
        </p>
        <p className="BeforeArrive">Before You Arrive</p>
        <p className="RedLane">
          Red Lane
          <sup>
            <span>&#174;</span>
          </sup>
          Spa
        </p>
        <p className="LocalTours">Local Tours</p>
        <p className="AlreadyBooked">Already Booked?</p>
      </div>
      <div className="Titlebar">
        <div className="beacheslogo">
          <img className="companylogo" src={logo} alt="logo" />
        </div>
        <div className="rightheader">
          <div className="booknowbutton">
            <h1>BOOK NOW</h1>
            <h5 className="checkRates">CHECK RATES & AVAILABILITY</h5>
          </div>
          <div className="moreicon">
            <img className="ellipsisicon" src={circles} alt="circles" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
