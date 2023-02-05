import React, { useState } from "react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation } from "swiper";
import {
  BsFillPlayFill,
  BsHeart,
  BsPlayCircle,
  BsPlayCircleFill,
  BsStar,
  BsStarFill,
  BsSuitHeart,
} from "react-icons/bs";
import ScrollTrigger from "react-scroll-trigger";
import { IoCarSportOutline, IoSpeedometerOutline } from "react-icons/io5";
import "./Testimonial.css";

const Testimonial = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <div className=" h-[500px] relative testimonial-bg">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="absolute bg-neutral-200 h-[140px] -top-20 bottom-0 w-2/3 right-0  shadow-xl rounded justify-center items-center clip_path flex gap-5">
            <div className="flex gap-3 items-center">
              <div className="bg-blue-600 bg-opacity-10 p-5 rounded-full">
                <BsSuitHeart className="inline  text-2xl    text-blue-600"></BsSuitHeart>
              </div>
              <div>
                <span className="text-3xl font-bold">
                  {counterOn && <CountUp start={950} duration={2} end={1000} />}
                  +
                </span>
                <p className="font-medium">Happy Customer</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-blue-600 bg-opacity-10 p-5 rounded-full">
                <IoCarSportOutline className="inline  text-2xl    text-blue-600"></IoCarSportOutline>
              </div>
              <div>
                <span className="text-3xl font-bold">
                  {counterOn && <CountUp start={180} duration={2} end={200} />}+
                </span>
                <p className="font-medium">Cars in Showroom</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-blue-600 bg-opacity-10 p-5 rounded-full">
                <IoSpeedometerOutline className="inline  text-2xl    text-blue-600"></IoSpeedometerOutline>
              </div>
              <div>
                <span className="text-3xl font-bold">
                  {counterOn && <CountUp start={10} duration={2} end={20} />}+
                </span>
                <p className="font-medium">Car Solutions</p>
              </div>
            </div>
          </div>
        </ScrollTrigger>
        <div className="flex container mx-auto h-full">
          <div className="w-1/2 self-center">
            <img
              className="w-[300px] mx-auto"
              src="https://i.ibb.co/gvj4jvD/quote-revised.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center w-1/2">
            <div className="bg-blue-600 p-4 rounded-full request-loader">
              <BsFillPlayFill className="inline text-4xl text-white"></BsFillPlayFill>
            </div>
          </div>
        </div>
        <div className="container relative mx-auto">
          <div className="w-[600px] absolute -bottom-36  ">
            <Swiper
              slidesPerView={1}
              // spaceBetween={30}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="testimonial-swiper"
            >
              <SwiperSlide className="bg-transparent">
                <div className="h-full mx-7 px-10 py-6 hover:cursor-pointer bg-neutral-200">
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold ">Amazing Support!</h3>
                    <span className="bg-amber-400 bg-opacity-20 rounded px-3 py-1 inline-flex justify-center items-center gap-1 font-bold">
                      <BsStarFill className="inline text-amber-500"></BsStarFill>{" "}
                      4.9
                    </span>
                  </div>
                  <p className="text-medium py-4 italic">
                    MotoHub is a great car reseller I've done business with. The
                    staff are really friendly and go out of their way to make
                    sure that the car purchasing process goes smoothly. I highly
                    recommend MotoHub!
                  </p>
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <img
                        className="h-[60px] w-[60px] rounded-full"
                        src="https://i.ibb.co/Mh0phYM/leif.jpg"
                        alt=""
                      />
                      <div>
                        <h4 className="text-lg font-semibold">Hin Su</h4>
                        <p className="font-medium">CEO, InfoTech</p>
                      </div>
                    </div>
                    <div className="self-end">
                      <img
                        src="https://i.ibb.co/gvj4jvD/quote-revised.png"
                        alt=""
                        className="h-[60px] opacity-20"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-transparent">
                <div className="h-full mx-7 px-10 py-6 hover:cursor-pointer bg-neutral-200">
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold ">Great Service</h3>
                    <span className="bg-amber-400 bg-opacity-20 rounded px-3 py-1 inline-flex justify-center items-center gap-1 font-bold">
                      <BsStarFill className="inline text-amber-500"></BsStarFill>{" "}
                      5.0
                    </span>
                  </div>
                  <p className="text-medium py-4 italic">
                    When I was looking to buy a car, I decided to give MotoHub a
                    shot and boy am I glad that I did! MotoHub has a great
                    selection of cars, both new and used. I highly recommend it
                    for anyone looking for a reliable car reseller!
                  </p>
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <img
                        className="h-[60px] w-[60px] rounded-full"
                        src="https://i.ibb.co/tzbZSSm/pexels-juan-pablo-serrano-arenas-1139743.jpg"
                        alt=""
                      />
                      <div>
                        <h4 className="text-lg font-semibold">
                          Artie Billings
                        </h4>
                        <p className="font-medium">Managing, KBL Contract</p>
                      </div>
                    </div>
                    <div className="self-end">
                      <img
                        src="https://i.ibb.co/gvj4jvD/quote-revised.png"
                        alt=""
                        className="h-[60px] opacity-20"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
