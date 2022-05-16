import React from "react";
import logo from "../images/beaches-blanco.png"
const FooterPage =()=>{
    return(
        <div className="FooterPage">
            <div className="unlimitedpremiumliquors">
                {/**aqui ira una lightbox del componente */}
            </div>
            <div className="endpage">
                <img className="bluelogo" src={logo} alt="logo"/>
                <h2>More Quality Inclusions</h2>
                <h3>THAN ANY OTHER RESORTS ON THE PLANET</h3>
                <h3 className="viewButton">View All Inclusions</h3>
            </div>
        </div>
    );
}
export default FooterPage;