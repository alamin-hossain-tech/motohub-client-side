import React from "react";

const Banner = () => {
  return (
    <div className="bg-neutral-700">
      <div className="container  mx-auto">
        <div className="flex flex-col lg:flex-row  mx-auto">
          <div
            className=" w-full lg:w-1/2 -mt-24  bg-blue-500 p-12 lg:p-16"
            style={{
              backgroundImage: `url("https://i.ibb.co/c3cDnq1/callout-1.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center right",
            }}
          >
            <h2 className="text-2xl font-bold text-white">
              Looking for a Cars ?
            </h2>
            <p className="text-lg font-bold text-neutral-800">
              Search From numerious cars
            </p>
          </div>
          <div
            className="lg:w-1/2 lg:-mt-24 bg-stone-600 p-12 lg:p-16"
            style={{
              backgroundImage: `url("https://i.ibb.co/RpDHWcT/callout-3.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center right",
            }}
          >
            <h2 className="text-2xl font-bold text-white">
              Do you want to sell car ?
            </h2>
            <p className="text-lg font-bold text-blue-500">
              Give a sell post today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
