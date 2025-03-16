"use client";
import "slick-carousel/slick/slick.css";
import React from "react";
import Slider from "react-slick";

function Cuisines() {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // max-md: Adjust for screens < 768px
        settings: {
          slidesToShow: 2, // Show 2 slides for smaller screens
        },
      },
    ],
  };

  return (
    <div className="bg-white w-[85%] mx-auto h-full my-10 rounded-xl shadow-2xl relative">
      <h1 className="font-bold text-3xl text-center py-5">Cuisines</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {[
            { srcs: "/indian.jpg", name: "Indian" },
            { srcs: "/italian.jpg", name: "Italian" },
            { srcs: "/chinese.jpeg", name: "Chinese" },
            { srcs: "/japanese.jpg", name: "Japanese" },
            { srcs: "/mexican.jpg", name: "Mexican" },
            { srcs: "/thai.jpeg", name: "Thai" },
            { srcs: "/french.jpg", name: "French" },
            { srcs: "/indonesian.jpg", name: "Indonesian" },
            { srcs: "/greek.png", name: "Greek" },
            { srcs: "/korean.jpg", name: "Korean" },
          ].map((item, index) => {
            return (
              <div
                className="m-1 rounded-lg text-center cursor-pointer max-md:px-5"
                key={index}
              >
                <div>{item.name}</div>
                <img
                  className="mx-auto my-5 rounded-xl w-52 h-52 max-md:h-40"
                  src={item.srcs}
                  alt=""
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Cuisines;
