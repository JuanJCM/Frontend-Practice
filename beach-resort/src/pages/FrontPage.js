import React from "react";
import liquor from "../images/premium-liquor.png";
const FrontPage = () => {
  return (
    <div className="logo">
      <h4 className="frontheadertitle">Only The World's Best Serves</h4>
      <h1 className="frontpageHeader">THE WORLD'S BEST</h1>
      <div className="lines">
        <span className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
      </div>
      <h4 className="yellowmellow">Always included. Always unlimited.</h4>
      <div className="goldstandardlogo">
        <img className="liquor" src={liquor} alt="liquor" />
      </div>
    </div>
  );
};
export default FrontPage;
