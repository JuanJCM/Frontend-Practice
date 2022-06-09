import React, { useState } from "react";
import background from "../images/palm-background.png";
import logos from "../images/Logos.png";
import whitebutton from "../images/whitebutton1.svg";
const SponsorPage = () => {
  const [hideLightbox, $setHideLightbox] = useState(true);
  return (
    <div className="SponsorPage">
      <div className="textarea">
        <h1 className="title">Hallmark of Excellence</h1>
        <br />
        <p className="sponsorText">
          As part of the 5-Star Luxury included
          <sup>
            <span>&#174;</span>
          </sup>
          {" "}experience, Beaches only serves premium brand liquors-and they're
          always included and unlimited. Quality and excellence are the
          hallmarks of Beaches, making us one of the
          most trusted brands in the world. It's this proven track record and
          best-in-class approach that has our guests
          returning time and time again.</p>
        <br />
      </div>
      <div className="sponsorlist">
        <br />
        <img className="logos" src={logos} alt="logos" />
        <br />
        <br />
        <br/>
      </div>
      <div className="imgarea" onClick={() => {$setHideLightbox(false)}}>
        {/* Aqui tiene que ir un LightBox del man del liquors*/}
        <div className="liquorman">
          <div className="playbutton">
            <img src={whitebutton} alt="alt" className="whitebutton"/>
          </div>
        </div>
      </div>
      <div className={`lightbox ${hideLightbox? "hide-lightbox":" "}`} onClick={()=>{$setHideLightbox(true)}}>
        <iframe
            src="https://www.youtube.com/embed/RQ3tXlwr7vc"
            className="video"
          />
        </div>
    </div>
  );
};
export default SponsorPage;
