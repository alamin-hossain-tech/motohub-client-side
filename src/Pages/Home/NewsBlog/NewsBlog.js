import { ArrowRight } from "@mui/icons-material";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const NewsBlog = () => {
  return (
    <div className="bg-neutral-600 pt-56 pb-36">
      <div data-aos="fade-up" data-aos-duration="1500">
        <div className="container mx-auto  text-center">
          <h4 className="text-blue-600 text-xl font-semibold ">
            Recent News & Update
          </h4>
          <h2 className="text-4xl font-semibold text-white ">
            Upcoming Cars & Events
          </h2>
          <p className="text-center w-1/3 text-white mx-auto pt-4">
            Dramatically plagiarize cost effective products and impactful action
            items. Credibly impactful sources before frictionless.
          </p>
        </div>
        <div className="container pt-10 flex gap-6 mx-auto">
          <div className="blogCard  rounded shadow bg-neutral-700">
            <div className="relative p-5">
              <img
                src="https://i.ibb.co/6s6gryL/this-is-one-horizontal-portrait-handsome-young-businessman-sitting-car-talking-car-dealer-standing-n.jpg"
                alt=""
                className="rounded"
              />
              <div className="px-4 py-1 bg-blue-600 text-white shadow rounded absolute right-6 bottom-6">
                <p className="text-sm">12, January, 2023</p>
              </div>
            </div>
            <div className="content px-5 pb-5 text-white">
              <h4 className="text-xl font-semibold ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, atque.
              </h4>
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                possimus et commodi error enim veniam voluptate corporis aut
                deleniti illum deserunt quos, quam est obcaecati magnam ipsam
                reiciendis vitae ea?...
              </p>
              <span className="text-blue-600 font-bold">
                Read More{" "}
                <BsArrowRight className="inline ml-2 font-bold text-xl" />
              </span>
            </div>
          </div>
          <div className="blogCard  rounded shadow bg-neutral-700">
            <div className="relative p-5">
              <img
                src="https://i.ibb.co/6s6gryL/this-is-one-horizontal-portrait-handsome-young-businessman-sitting-car-talking-car-dealer-standing-n.jpg"
                alt=""
                className="rounded"
              />
              <div className="px-4 py-1 bg-blue-600 text-white shadow rounded absolute right-6 bottom-6">
                <p className="text-sm">12, January, 2023</p>
              </div>
            </div>
            <div className="content px-5 pb-5 text-white">
              <h4 className="text-xl font-semibold ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, atque.
              </h4>
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                possimus et commodi error enim veniam voluptate corporis aut
                deleniti illum deserunt quos, quam est obcaecati magnam ipsam
                reiciendis vitae ea?...
              </p>
              <span className="text-blue-600 font-bold">
                Read More{" "}
                <BsArrowRight className="inline ml-2 font-bold text-xl" />
              </span>
            </div>
          </div>
          <div className="blogCard  rounded shadow bg-neutral-700">
            <div className="relative p-5">
              <img
                src="https://i.ibb.co/6s6gryL/this-is-one-horizontal-portrait-handsome-young-businessman-sitting-car-talking-car-dealer-standing-n.jpg"
                alt=""
                className="rounded"
              />
              <div className="px-4 py-1 bg-blue-600 text-white shadow rounded absolute right-6 bottom-6">
                <p className="text-sm">12, January, 2023</p>
              </div>
            </div>
            <div className="content px-5 pb-5 text-white">
              <h4 className="text-xl font-semibold ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, atque.
              </h4>
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                possimus et commodi error enim veniam voluptate corporis aut
                deleniti illum deserunt quos, quam est obcaecati magnam ipsam
                reiciendis vitae ea?...
              </p>
              <span className="text-blue-600 font-bold">
                Read More{" "}
                <BsArrowRight className="inline ml-2 font-bold text-xl" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBlog;
