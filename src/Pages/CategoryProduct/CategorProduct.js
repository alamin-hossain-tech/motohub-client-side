import { Button } from "@mui/material";

import { Spinner } from "flowbite-react";
import React, { useContext } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useAxios from "../../Hooks/useAxios";
import SetTabTitle from "../../Utility/SetTabTitle";
import AdvertiseCard from "../Shared/AdvertiseCard/AdvertiseCard";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";

const CategorProduct = () => {
  SetTabTitle("Products");
  const { logOut } = useContext(AuthContext);
  const id = useLoaderData();
  const getCategoryTitle = (id) => {
    if (+id === 1) {
      return "Toyota";
    }
    if (+id === 2) {
      return "Honda";
    }
    if (+id === 3) {
      return "Hyundai";
    }
    if (+id === 4) {
      return "Nissan";
    }
  };
  const { response, loading, error } = useAxios({
    method: "get",
    url: `https://motohub-gules.vercel.app/products/category/${id}`,
    headers: JSON.stringify({
      headers: {
        authorization: ` Bearer ${localStorage.getItem("moto_token")}`,
      },
    }),
    body: JSON.stringify({}),
  });
  if (loading) {
    return (
      <div className="flex justify-center bg-neutral-700 items-center h-[80vh]">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }
  if (error) {
    logOut().then().catch();
  }

  return (
    <div className="bg-neutral-700">
      <TittleHeader title={getCategoryTitle(id)}></TittleHeader>
      <div className=" border-b border-neutral-600 ">
        <div className="flex container justify-center mx-auto gap-5 text-white">
          <NavLink to="/category/1">
            <Button className="px-4 py-2" sx={{ color: "white" }}>
              Toyota
            </Button>
          </NavLink>
          <NavLink to="/category/2">
            <Button className="px-4 py-2" sx={{ color: "white" }}>
              Honda
            </Button>
          </NavLink>
          <NavLink to="/category/3">
            <Button className="px-4 py-2" sx={{ color: "white" }}>
              Hyundai
            </Button>
          </NavLink>
          <NavLink to="/category/4">
            <Button className="px-4 py-2" sx={{ color: "white" }}>
              Nissan
            </Button>
          </NavLink>
        </div>
      </div>
      {response.length === 0 && (
        <div className=" h-72 flex justify-center items-center ">
          {" "}
          <h2>No Products available for this category</h2>
        </div>
      )}
      <div className="pt-5 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12 lg:gap-y-0 px-8 lg:px-0 container mx-auto border-b border-neutral-600 ">
        {response.map((product) => (
          <AdvertiseCard key={product._id} product={product}></AdvertiseCard>
        ))}
      </div>
    </div>
  );
};

export default CategorProduct;
