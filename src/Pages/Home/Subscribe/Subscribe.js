import { Button } from "flowbite-react";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const Subscribe = () => {
  return (
    <div className="bg-neutral-700 py-6">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row">
        <div className="px-5 lg:px-0 w-full lg:w-1/2 text-white self-center">
          <p className="font-semibold text-blue-600 text-xl pb-2">Newsletter</p>
          <h2 className="text-4xl font-bold">
            Subscribe To Our Newsletter For New Updates
          </h2>
          <div className="mt-8 py-2 px-3 rounded shadow bg-white inline-flex items-center gap-2">
            <input
              placeholder="Your Email Adress..."
              className="w-full lg:w-96 border-none rounded text-black"
              type="email"
            />{" "}
            <Button className="inline-block w-44">Subscribe</Button>
          </div>
        </div>
        <div className="text-right hidden lg:block">
          <Parallax translateX={["80px", "-10px"]}>
            <img
              className="-mt-24"
              src="https://i.ibb.co/jbQkWGw/tmp-63de2246aa8d1.png"
              alt=""
            />
          </Parallax>
        </div>
        <div className="text-right lg:hidden">
          <img
            className="-mt-24"
            src="https://i.ibb.co/jbQkWGw/tmp-63de2246aa8d1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
