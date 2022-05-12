import React from "react";
import background from'../images/palm-background.png';
const SponsorPage=()=>{
    return(
        <div className="SponsorPage">
            <img className="palmbackground" src={background} alt="background"/>
            <div className="textarea">
                <h1>Hallmark of Excellence</h1>
                <br/>
                <p>As part of the 5-Star Luxury included<span>&#174;</span> experience, Beaches only serves premium brand
                liquors-and they're always included and unlimited. Quality and excellence are the hallmarks of
                Beaches, making us one of the most trusted brands in the world. It's this proven track record
                and best-in-class approach that has our guests returning time and time again</p>
            </div>
            <div className="sponsorlist">
                <img/>
            </div>
            <div className="imgarea">
                {/* Aqui tiene que ir un LightBox del man del liquors*/}
                <img/>
            </div>
        </div>
    );
}
export default SponsorPage;