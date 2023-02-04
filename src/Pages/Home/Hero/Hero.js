import React from "react";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <div className="container mx-auto items-center flex py-32">
        <div className="w/12">
          <h4 className="text-xl font-bold text-blue-600">
            Welcome to MotoHub
          </h4>
          <h1 className="text-white text-7xl  font-bold after:absolute background-text after:-left-80 after:bottom-48 after:w-1/2 -z-10 after:text-[120px] after:opacity-5 after:text-white after:translate-y--1/2  after:-rotate-90">
            Buy, Sell or Trade
          </h1>
          <p className="text-white py-3 text-2xl font-medium">
            Find Your desire car as MotoHub makes it easy !
          </p>
        </div>
        <div>
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
