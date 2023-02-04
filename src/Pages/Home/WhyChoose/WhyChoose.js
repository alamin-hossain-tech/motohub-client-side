import React from "react";
import { BsCurrencyDollar, BsGear } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import advertiseOne from "../../../Assets/Advertise-Banner-1.png";
import advertiseTwo from "../../../Assets/Advertise-Banner-2.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import { HiArrowRight, HiOutlineLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";
const WhyChoose = () => {
  AOS.init();
  return (
    <div className="py-12  bg-neutral-600">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="container mx-auto"
      >
        <div className="py-12 text-white">
          {" "}
          <h2 className="text-center  text-4xl font-semibold">
            Why Choose Us?
          </h2>
          <p className="text-center w-1/3 mx-auto pt-4">
            Dramatically plagiarize cost effective products and impactful action
            items. Credibly impactful sources before frictionless.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="p-5 bg-neutral-700 text-white shadow rounded">
            <HiOutlineLightBulb className="bg-blue-600 bg-opacity-20 text-5xl p-3 rounded  text-blue-600"></HiOutlineLightBulb>
            <h4 className="font-semibold text-xl py-3">
              Expert Certified Mechanics
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              tenetur, at voluptatibus omnis voluptates provident expedita
              eligendi facere et non!
            </p>
          </div>
          <div className="p-5 bg-neutral-700 text-white shadow rounded">
            <BsGear className="bg-blue-600 bg-opacity-20 text-5xl p-3 rounded  text-blue-600"></BsGear>
            <h4 className="font-semibold text-xl py-3">Genuine Spares Parts</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              tenetur, at voluptatibus omnis voluptates provident expedita
              eligendi facere et non!
            </p>
          </div>
          <div className="p-5 bg-neutral-700 text-white shadow rounded">
            <BsCurrencyDollar className="bg-blue-600 bg-opacity-20 text-5xl p-3 rounded text-blue-600 "></BsCurrencyDollar>
            <h4 className="font-semibold text-xl py-3">Get Reasonable Price</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              tenetur, at voluptatibus omnis voluptates provident expedita
              eligendi facere et non!
            </p>
          </div>
          <div className=" bg-neutral-700 text-white shadow rounded col-span-2 p-5">
            <div className="flex justify-between pb-3">
              <h2 className="text-2xl font-semibold">Best Selling Brand</h2>
              <Link to="/" className="text-blue-600 font-semibold">
                More brands{" "}
                <span>
                  <HiArrowRight className="inline font-bold arrow-r"></HiArrowRight>
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-4 gap-3 grid-flow-col auto-cols-max">
              <div>
                <Link to="/category/4">
                  <div className=" bg-gray-200 shadow rounded hover:shadow-lg hover:cursor-pointer  flex items-center justify-center p-5">
                    <img
                      className="h-[80px]"
                      src="https://i.ibb.co/HG1fXdq/nissan-6.png"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/category/1">
                  <div className=" shadow bg-gray-200 rounded hover:shadow-lg hover:cursor-pointer  flex items-center justify-center p-5">
                    <img
                      className="h-[80px]"
                      src="https://i.ibb.co/m8m1nM1/toyota.png"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/category/2">
                  <div className=" shadow bg-gray-200 rounded hover:shadow-lg hover:cursor-pointer  flex items-center justify-center p-5">
                    <img
                      className="h-[80px]"
                      src="https://i.ibb.co/0qFD1ch/Asset-2.png"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/category/3">
                  <div className=" shadow bg-gray-200 rounded hover:shadow-lg hover:cursor-pointer  flex items-center justify-center p-5">
                    <img
                      className="h-[80px]"
                      src="https://i.ibb.co/ws4cJP4/hyundai-lg-rev3.png"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow rounded">
            <Swiper
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img className="rounded" src={advertiseOne} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="rounded" src={advertiseTwo} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="flex py-4"></div>
      </div>
    </div>
  );
};

export default WhyChoose;
