import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { useParallax } from "react-scroll-parallax";

const Features = () => {
  const { ref } = useParallax({ speed: 35 });
  return (
    <div className=" bg-neutral-600 text-white pt-12 pb-24">
      <div className="flex justify-center items-center mx-auto container">
        <div className="flex-1">
          <div className="flex gap-3">
            <div className="">
              <h4 className="text-right font-semibold text-xl">
                Experience support team
              </h4>
              <p className="text-right">
                Struggling to provide the best customer service? Let the
                Experience Support Team do it for you. Our team of experts are
                here to help you.
              </p>
            </div>
            <div>
              <FaRegDotCircle className="inline text-blue-600"></FaRegDotCircle>
            </div>
          </div>
          <div className="flex gap-3 py-12">
            <div className="">
              <h4 className="text-right font-semibold text-xl">
                Handle emergency situations
              </h4>
              <p className="text-right">
                Handle any emergency situation with confidence with Handle
                emergency situation. Our app provides real-time advice and
                guidance to help you
              </p>
            </div>
            <div>
              <FaRegDotCircle className="inline text-blue-600"></FaRegDotCircle>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="">
              <h4 className="text-right font-semibold text-xl">
                Insurance Included
              </h4>
              <p className="text-right">
                Don't take a chance with your financial security! Get the peace
                of mind that comes with Insurance Included - comprehensive
                coverage for all your needs.
              </p>
            </div>
            <div>
              <FaRegDotCircle className="inline text-blue-600"></FaRegDotCircle>
            </div>
          </div>
        </div>
        <div ref={ref} className="flex-1">
          <img
            className="w-[500px]"
            src="https://i.ibb.co/2Fg1ZCG/top-view-car.png"
            alt=""
          />
        </div>
        <div className="flex-1">
          <div className="flex gap-3">
            <div>
              <FaRegDotCircle className="inline text-blue-600"></FaRegDotCircle>
            </div>
            <div className="">
              <h4 className="text-left font-semibold text-xl">
                Hight technology instrument
              </h4>
              <p className="text-left">
                With our incredibly precise and reliable measurements, you can
                quickly and easily gain improved insights into your research
                area.
              </p>
            </div>
          </div>
          <div className="flex gap-3 py-12">
            <div>
              <FaRegDotCircle className="inline text-blue-600"></FaRegDotCircle>
            </div>

            <div className="">
              <h4 className="text-left font-semibold text-xl">
                Access control system
              </h4>
              <p className="text-left">
                Tired of keeping track of manual keys and access cards? Upgrade
                to an automated access control system today!
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <FaRegDotCircle className="inline text-blue-600"></FaRegDotCircle>
            </div>
            <div className="">
              <h4 className="text-left font-semibold text-xl">
                Online 24/7 Available
              </h4>
              <p className="text-left">
                24/7 support from our team of experts helps you provide the best
                customer experience, no matter what time of day or night.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
