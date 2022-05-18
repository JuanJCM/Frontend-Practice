import React from "react";
import unlimitedliquors from"../images/Footer-photo.jpg";
import playbutton from "../images/play-button-border.png";
const FooterPage =()=>{
    return(
        <div className="FooterPage">
            <div className="unlimitedpremiumliquors">
                {/**aqui ira una lightbox del componente */}
                <div className="backgroundbutton">
                    <div className="play-video-icon">
                        <img className="playbutton" src={playbutton} alt="playbutton"/>
                        <p className="widthp">Play Video</p>
                    </div>
                    <div className="text-button">
                        <p className="white-text">Unlimited Premium Liquors</p>
                        <p className="blue-text">ARE INCLUDED AT BEACHES</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FooterPage;