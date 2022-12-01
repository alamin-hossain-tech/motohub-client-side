import React from "react";
import HeadingDivider from "../../Shared/HeadingDivider/HeadingDivider";

const Advertise = () => {
  return (
    <div className="py-24 container mx-auto">
      <div>
        <h2 className="text-center  text-3xl font-bold">Popular Cars</h2>
        <p className="font-bold text-center pt-3 ">Get Your Ones</p>
        <HeadingDivider></HeadingDivider>
      </div>
      <div className=" pt-5 grid grid-cols-4 gap-8">
        {/* <AdvertiseCard></AdvertiseCard> */}
      </div>
    </div>
  );
};

export default Advertise;
