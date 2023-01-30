import { Spinner } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import AdvertiseCard from "../../Shared/AdvertiseCard/AdvertiseCard";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

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
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-anchor-placement=" bottom"
          className="py-24 container mx-auto px-8 lg:px-0 bg-white"
        >
          <div>
            <h2 className=" text-center text-4xl font-semibold">
              Featured Cars
            </h2>
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
      )}
    </>
  );
};

export default Advertise;
