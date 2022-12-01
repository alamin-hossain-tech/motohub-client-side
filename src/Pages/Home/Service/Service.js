import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 px-8 lg:px-0 ">
      <div className="  hover:shadow-lg hover:cursor-pointer h-72  p-12 text-center">
        <div className="flex justify-center">
          <div className="bg-blue-100 rounded-full p-5 ">
            <img
              className="hover:scale-90 hover:transition-all "
              src="https://i.ibb.co/QkP3k9P/service-1.png"
              alt=""
            />
          </div>
        </div>
        <h4 className="text-lg font-bold py-3">ALL BRANDS</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
          ducimus?
        </p>
      </div>
      <div className="  hover:shadow-lg hover:cursor-pointer h-72  p-12 text-center">
        <div className="flex justify-center">
          <div className="bg-blue-100 rounded-full p-5 ">
            <img
              className="hover:scale-90 hover:transition-all "
              src="https://i.ibb.co/MPSsrGR/service-2.png"
              alt=""
            />
          </div>
        </div>
        <h4 className="text-lg font-bold py-3">FREE SUPPORT</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
          ducimus?
        </p>
      </div>
      <div className="  hover:shadow-lg hover:cursor-pointer h-72  p-12 text-center">
        <div className="flex justify-center">
          <div className="bg-blue-100 rounded-full p-5 ">
            <img
              className="hover:scale-90 hover:transition-all "
              src="https://i.ibb.co/MZwVvpc/service-3.png"
              alt=""
            />
          </div>
        </div>
        <h4 className="text-lg font-bold py-3">DEALERSHIP</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
          ducimus?
        </p>
      </div>
      <div className="  hover:shadow-lg hover:cursor-pointer h-72  p-12 text-center">
        <div className="flex justify-center">
          <div className="bg-blue-100 rounded-full p-5 ">
            <img
              className="hover:scale-90 hover:transition-all "
              src="https://i.ibb.co/NV23TMj/service-4.png"
              alt=""
            />
          </div>
        </div>
        <h4 className="text-lg font-bold py-3">AFFORDABLE</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
          ducimus?
        </p>
      </div>
    </div>
  );
};

export default Service;
