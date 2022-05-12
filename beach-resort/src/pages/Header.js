import React from "react";
import logo from '../images/beaches-blanco.png';
import circles from'../icons/ellipsis-v.svg';
const Header = () => {
  return (
    <div className="header">
      <div className="Appbar">
        <p className="Search">Search</p>
        <p>Local Tours</p>
        <p>
          Red Lane<sup><span>&#174;</span></sup>Spa
        </p>
        <p>Before You Arrive</p>
        <p>Already Booked?</p>
      </div>
      <div className="Titlebar" >
        <div className ='beacheslogo'>
          <img className="companylogo" src={logo} alt="logo"/>
        </div>
        <div className="booknowbutton">
          <h1>BOOK NOW</h1>
          <h5>CHECK RATES & AVAILABILITY</h5>
        </div>
        <div className="moreicon">
          <img className="ellipsisicon" src={circles} alt="circles"/>
        </div>
      </div>
    </div>
  );
};
export default Header;
