import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../images/slider1.jpg";
import slide2 from "../images/slider2.jpg";
import slide3 from "../images/slider3.jpg";
import slide4 from "../images/slider4.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

const SliderSection =()=> {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="sliderSection"
      >
        <SwiperSlide className="slide1"><img src={slide1} alt="slide1"/> </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="slide2"/></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="slide3"/></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="slide4"/></SwiperSlide>
      </Swiper>
    </>
  );
}

export default SliderSection;
