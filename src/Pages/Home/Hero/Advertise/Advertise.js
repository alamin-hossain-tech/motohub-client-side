import React from "react";
import AdvertiseCard from "../../../Shared/AdvertiseCard/AdvertiseCard";

const Advertise = () => {
  return (
    <div className="py-24 container mx-auto grid grid-cols-4 gap-8">
      <AdvertiseCard></AdvertiseCard>
      <AdvertiseCard></AdvertiseCard>
      <AdvertiseCard></AdvertiseCard>
      <AdvertiseCard></AdvertiseCard>
    </div>
  );
};

export default Advertise;
