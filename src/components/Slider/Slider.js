import React, { useState } from "react";
import "./Slider.css";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";
function Slider(index) {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };
  //function that moves the dot
  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className="slider"> <div className="container-slider">
    {dataSlider.map((obj, index) => {
      return (
        <div
          key={obj.id}
          className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
        >
          <img
            classname="container-slider-img"
            src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`|| '/videos/video1.mp4'}
          />
          
        </div>
      );
    })}
    <BtnSlider moveSlide={nextSlide} direction={"next"} />
    <BtnSlider prevSlide={prevSlide} direction={"prev"} />
    {/* adding container dots  */}
    {/* use anonymous function for moveDot so it only gets triggered when the user presses on it  */}
    <div className="container-dots">
      {Array.from({ length: 5 }).map((item, index) => (
        <div className={slideIndex === index + 1 ? "dot active" : "dot"}>
          {" "}
        </div>
      ))}
    </div>
  </div> </div>
   
  );
}

export default Slider;
