import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../images/slider1.jpg";
import slide2 from "../images/slider2.jpg";
import slide3 from "../images/slider3.jpg";
import slide4 from "../images/slider4.jpg";
import Sliderlines from "../images/format-justify.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const SliderSection = () => {
  return (
    <div className="sliderSectionPage">
      <div className="sliderSectionSpace">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="sliderSection"
        >
          <SwiperSlide className="slide1">
            <img src={slide1} alt="slide1" className="slide1"/>
            <div className="swimupContainer">
              <div className="backgroundContainer">
                <h1 className="bigTitle">SWIM-UP</h1>
                <h4 className="smallTitle">POOL BARS</h4>
                <div className="checkincontainer">
                  <div className="blackRectanglesection">
                    <p className="parragraphtitle">SWIM-UP POOL BARS</p>
                    <img
                      src={Sliderlines}
                      alt="Sliderlines"
                      className="Sliderlines"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="slide2" className="slide2" />
            <div className="swimupContainer">
              <div className="backgroundContainer">
                <h1 className="bigTitle">Share Time</h1>
                <h4 className="smallTitle">POOL BARS</h4>
                <div className="checkincontainer">
                  <div className="blackRectanglesection">
                    <p className="parragraphtitle">SWIM-UP POOL BARS</p>
                    <img
                      src={Sliderlines}
                      alt="Sliderlines"
                      className="Sliderlines"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="slide3"  className="slide3"/>
            <div className="swimupContainer">
          <div className="backgroundContainer">
            <h1 className="bigTitle">Comfort Space</h1>
            <h4 className="smallTitle">POOL BARS</h4>
            <div className="checkincontainer">
              <div className="blackRectanglesection">
                <p className="parragraphtitle">SWIM-UP POOL BARS</p>
                <img src={Sliderlines} alt="Sliderlines" className="Sliderlines" />
              </div>
            </div>
          </div>
        </div>

          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="slide4" className="slide4" />
            <div className="swimupContainer">
          <div className="backgroundContainer">
            <h1 className="bigTitle">Private Places</h1>
            <h4 className="smallTitle">BARS PRIVATE SPACE</h4>
            <div className="checkincontainer">
              <div className="blackRectanglesection">
                <p className="parragraphtitle">SWIM-UP POOL BARS</p>
                <img src={Sliderlines} alt="Sliderlines" className="Sliderlines" />
              </div>
            </div>
          </div>
        </div>

          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderSection;
