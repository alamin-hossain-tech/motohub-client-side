import React from "react";
import AdvertiseCard from "../../Shared/AdvertiseCard/AdvertiseCard";

const Advertise = () => {
  return (
    <div className="py-24 container mx-auto">
      <div>
        <h2 className="text-center pb-16 text-3xl font-bold">Popular Cars</h2>
      </div>
      <div className="  grid grid-cols-4 gap-8">
        <AdvertiseCard></AdvertiseCard>
      </div>
    </div>
  );
};

export default Advertise;
