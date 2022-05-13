import React from "react";
import background from'../images/palm-background.png';
import logos from '../images/Logos.png';
import liquorman from '../images/liquorman.png';
const SponsorPage=()=>{
    return(
        <div className="SponsorPage">
            <div className="textarea">
                <h1 className="title">Hallmark of Excellence</h1>
                <br/>
                <p>As part of the 5-Star Luxury included<sup><span>&#174;</span></sup> experience, Beaches only serves premium brand liquors-and they're </p>
                <p>always included and unlimited. Quality and excellence are the hallmarks of Beaches, making us one of the</p>
                <p>most trusted brands in the world. It's this proven track record and best-in-class approach that has our guests</p>
                <p>returning time and time again.</p>
                <br/>
            </div>
            <div className="sponsorlist">
                <br/>
                <img className="logos" src={logos} alt="logos"/>
                <br/>
                <br/>
            </div>
            <div className="imgarea">
                <br/>
                <br/>
                {/* Aqui tiene que ir un LightBox del man del liquors*/}
                <img className="liquorman" src={liquorman} alt="liquorman"/>
            </div>
        </div>
    );
}
export default SponsorPage;