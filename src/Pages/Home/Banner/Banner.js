import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="flex  mx-auto">
        <div
          className="w-1/2 bg-amber-400 p-16"
          style={{
            backgroundImage: `url("https://i.ibb.co/c3cDnq1/callout-1.png")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
          }}
        >
          <h2 className="text-2xl font-bold">Are You Looking for a Cars?</h2>
          <p className="text-lg font-bold text-red-500">
            Search From numerious cars
          </p>
        </div>
        <div
          className="w-1/2 bg-stone-600 p-16"
          style={{
            backgroundImage: `url("https://i.ibb.co/RpDHWcT/callout-3.png")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
          }}
        >
          <h2 className="text-2xl font-bold text-white">
            Do you want to sell car?
          </h2>
          <p className="text-lg font-bold text-blue-500">
            Give a sell post today
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
