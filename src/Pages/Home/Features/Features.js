import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { useParallax } from "react-scroll-parallax";

const Features = () => {
  const { ref } = useParallax({ speed: 35 });
  return (
    <div className=" bg-neutral-100 pt-12 pb-24">
      <div className="flex justify-center items-center mx-auto container">
        <div className="flex-1">
          <div className="flex gap-3">
            <div className="">
              <h4 className="text-right font-semibold text-xl">
                Experience support team
              </h4>
              <p className="text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis doloremque in magnam debitis ut maiores illo
                voluptatum repellendus, exercitationem blanditiis.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis doloremque in magnam debitis ut maiores illo
                voluptatum repellendus, exercitationem blanditiis.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis doloremque in magnam debitis ut maiores illo
                voluptatum repellendus, exercitationem blanditiis.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis doloremque in magnam debitis ut maiores illo
                voluptatum repellendus, exercitationem blanditiis.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis doloremque in magnam debitis ut maiores illo
                voluptatum repellendus, exercitationem blanditiis.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis doloremque in magnam debitis ut maiores illo
                voluptatum repellendus, exercitationem blanditiis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
