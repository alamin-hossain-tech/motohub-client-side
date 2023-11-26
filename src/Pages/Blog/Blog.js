import { Accordion } from "flowbite-react";
import React from "react";
import SetTabTitle from "../../Utility/SetTabTitle";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";

const Blog = () => {
  SetTabTitle("Blog");
  return (
    <div className="bg-neutral-600 text-white">
      <TittleHeader title={"Blog"}></TittleHeader>
      <div className="container py-8 px-8 mx-auto">
        <p className="text-center">Coming Soon..</p>
      </div>
    </div>
  );
};

export default Blog;
