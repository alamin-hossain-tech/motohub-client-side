import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  AOS.init();
  return (
    <div className="bg-neutral-100">
      <div
        data-aos="fade-in"
        data-aos-duration="3000"
        className="container mx-auto flex gap-12 py-16 px-8 lg:px-0 "
      >
        <div className=" flex-1 hover:shadow-lg hover:cursor-pointer   p-12 text-center">
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
            The car brands which focused on electric car technology seemed to
            retain huge growth.
          </p>
        </div>
        <div className="flex-1  hover:shadow-lg hover:cursor-pointer   p-12 text-center">
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
            MotoHub serves providing access to free, 24/7 support via mediums
            people already use and trust.
          </p>
        </div>
        <div className="flex-1  hover:shadow-lg hover:cursor-pointer   p-12 text-center">
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
            Interested in dealership? MotHub has solution for that. Feel free to
            contact with us
          </p>
        </div>
        <div className="flex-1  hover:shadow-lg hover:cursor-pointer   p-12 text-center">
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
            MotoHub provides quality service with AFFORDABLE deal. Do hurry up
            before stock out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
