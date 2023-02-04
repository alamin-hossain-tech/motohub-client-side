import { Spinner } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import AdvertiseCard from "../../Shared/AdvertiseCard/AdvertiseCard";
import "./Advertise.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Navigation } from "swiper";

const Advertise = () => {
  AOS.init();
  const { logOut } = useContext(AuthContext);
  const {
    response = [],
    loading,
    error,
  } = useAxios({
    method: "get",
    url: `https://motohub-gules.vercel.app/products`,
    headers: JSON.stringify({
      headers: {
        authorization: ` Bearer ${localStorage.getItem("moto_token")}`,
      },
    }),
    body: JSON.stringify({}),
  });
  if (loading) {
    return (
      <div className="flex justify-center items-center h-72">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }
  if (error) {
    logOut().then().catch();
  }

  return (
    <>
      {response?.length > 0 && (
        <div className="bg-neutral-700">
          <div className="py-24 container mx-auto px-8 lg:px-0">
            <div className="text-white">
              <h2 className=" text-center text-4xl font-semibold">
                Featured Cars
              </h2>
              <p className="text-center w-1/3 mx-auto pt-4">
                Dramatically plagiarize cost effective products and impactful
                action items. Credibly impactful sources before frictionless.
              </p>
            </div>

            <div className=" relative">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiperCarCard"
              >
                <div className=""></div>
                {response.map((product) => (
                  <SwiperSlide key={product._id}>
                    <AdvertiseCard product={product}></AdvertiseCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Advertise;
