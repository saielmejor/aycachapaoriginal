import React from "react";
import "./Slider.css";
function BtnSlider({direction, moveSlide,prevSlide}) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={direction === 'next' ? moveSlide: prevSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? (
        <i class="fa-solid fa-arrow-right-long"></i>
      ) : (
        <i class="fa-solid fa-arrow-left-long"></i>
      )}
    </button>
  );
}

export default BtnSlider;
