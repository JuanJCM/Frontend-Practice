import React from "react";
import logo from "../images/beaches-azul.png";
const EndPage = () => {
  return (
    <div className="EndPage">
      <img className="bluelogo" src={logo} alt="logo" />
      <h2>More Quality Inclusions</h2>
      <h3>THAN ANY OTHER RESORTS ON THE PLANET</h3>
      <h3 className="viewButton">View All Inclusions</h3>
    </div>
  );
};
export default EndPage;
