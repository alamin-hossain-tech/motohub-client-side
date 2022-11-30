import { Button } from "@mui/material";
import axios from "axios";
import { Tabs } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import AdvertiseCard from "../Shared/AdvertiseCard/AdvertiseCard";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";

const CategorProduct = () => {
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

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/category/${id}`, {
        headers: {
          authorization: ` Bearer ${localStorage.getItem("moto_token")}`,
        },
      })
      .then((response) => {
        setProducts(response.data);
      });
  }, [id]);

  return (
    <div>
      <TittleHeader title={getCategoryTitle(id)}></TittleHeader>
      <div className=" border-b ">
        <div className="flex container justify-center mx-auto gap-5">
          <Link to="/category/1">
            <Button className="px-4 py-2">Toyota</Button>
          </Link>
          <Link to="/category/2">
            <Button className="px-4 py-2">Honda</Button>
          </Link>
          <Link to="/category/3">
            <Button className="px-4 py-2">Hyundai</Button>
          </Link>
          <Link to="/category/4">
            <Button className="px-4 py-2">Nissan</Button>
          </Link>
        </div>
      </div>
      {products.length === 0 && (
        <div className=" h-72 flex justify-center items-center ">
          {" "}
          <h2>No Products Found in this category</h2>
        </div>
      )}
      <div className=" py-5 grid grid-cols-4 gap-8 container mx-auto my-5">
        {products.map((product) => (
          <AdvertiseCard key={product._id} product={product}></AdvertiseCard>
        ))}
      </div>
    </div>
  );
};

export default CategorProduct;
