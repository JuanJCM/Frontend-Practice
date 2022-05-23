import { React, useState } from "react";
import unlimitedliquors from "../images/Footer-photo.jpg";
import playbutton from "../images/play-button-border.png";
const FooterPage = () => {
  const [hideLightbox, $setHideLightbox] = useState(true);
  return (
    <div className="FooterPage">
      <div className="unlimitedpremiumliquors">
        <div
          className="backgroundbutton"
          onClick={() => {
            $setHideLightbox(false);
          }}
        >
          <div className="play-video-icon">
            <img className="playbutton" src={playbutton} alt="playbutton" />
            <p className="widthp">Play Video</p>
          </div>
          <div className="text-button">
            <p className="white-text">Unlimited Premium Liquors</p>
            <p className="blue-text">ARE INCLUDED AT BEACHES</p>
          </div>
        </div>
        <div
          className={`lightbox ${hideLightbox ? "hide-lightbox" : ""}`}
          onClick={() => {
            $setHideLightbox(true);
          }}
        >
          <iframe
            className="video"
            src="https://youtube.com/embed/dQw4w9WgXcQ"
          />
        </div>
      </div>
    </div>
  );
};
export default FooterPage;
