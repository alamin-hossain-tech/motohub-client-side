import { Logout } from "@mui/icons-material";
import { Button } from "@mui/material";

import { Spinner, Tabs } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useAxios from "../../Hooks/useAxios";
import AdvertiseCard from "../Shared/AdvertiseCard/AdvertiseCard";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";

const CategorProduct = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
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
    url: `http://localhost:5000/products/category/${id}`,
    headers: JSON.stringify({
      headers: {
        authorization: ` Bearer ${localStorage.getItem("moto_token")}`,
      },
    }),
    body: JSON.stringify({}),
  });
  if (loading) {
    return <Spinner aria-label="Center-aligned spinner example" />;
  }
  if (error) {
    logOut().then().catch();
  }

  return (
    <div>
      <TittleHeader title={getCategoryTitle(id)}></TittleHeader>
      <div className=" border-b ">
        <div className="flex container justify-center mx-auto gap-5">
          <NavLink to="/category/1">
            <Button className="px-4 py-2">Toyota</Button>
          </NavLink>
          <NavLink to="/category/2">
            <Button className="px-4 py-2">Honda</Button>
          </NavLink>
          <NavLink to="/category/3">
            <Button className="px-4 py-2">Hyundai</Button>
          </NavLink>
          <NavLink to="/category/4">
            <Button className="px-4 py-2">Nissan</Button>
          </NavLink>
        </div>
      </div>
      {/* {data.length === 0 && (
        <div className=" h-72 flex justify-center items-center ">
          {" "}
          <h2>No Products Found in this category</h2>
        </div>
      )} */}
      <div className=" py-5 grid grid-cols-4 gap-8 container mx-auto my-5">
        {response.map((product) => (
          <AdvertiseCard key={product._id} product={product}></AdvertiseCard>
        ))}
      </div>
    </div>
  );
};

export default CategorProduct;
