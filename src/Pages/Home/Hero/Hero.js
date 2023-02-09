import React from "react";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  AOS.init();
  return (
    <div
      className=" relative bg-neutral-700 "
      style={{
        backgroundImage: `url("https://i.ibb.co/48mwn2z/blob-haikei-6.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right",
        backgroundSize: "contain",
      }}
    >
      <div className="container mx-auto items-center flex flex-col lg:flex-row py-32">
        <div className="lg:w-1/2 px-6 lg:px-0 pb-12 lg:pb-0">
          <h4 className="text-xl font-bold text-blue-600">
            Welcome to MotoHub
          </h4>
          <h1 className="text-white text-6xl lg:text-7xl  font-bold after:absolute background-text after:-right-10 lg:after:right-28 after:bottom-20 after:w-1/2 -z-10 after:text-5xl lg:after:text-[70px] after:opacity-10 after:text-white after:translate-y--1/2">
            Buy, Sell or Trade
          </h1>
          <p className="text-white py-3 text-2xl font-medium">
            Find Your desire car as MotoHub makes it easy !
          </p>
        </div>
        <div className="hidden lg:block">
          <Parallax translateX={["200px", "-100px"]}>
            <img
              src="https://i.ibb.co/m6c2fBV/car.png"
              alt="car_image"
              className="w-full"
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </Parallax>
        </div>
        <div className="lg:hidden">
          <img
            src="https://i.ibb.co/m6c2fBV/car.png"
            alt="car_image"
            className="w-full"
            data-aos="fade-left"
            data-aos-duration="1500"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
