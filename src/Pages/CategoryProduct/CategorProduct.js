import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const CategorProduct = () => {
  const id = useLoaderData();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/category/${id}`)
      .then((response) => {
        setProducts(response.data);
      });
  }, [id]);
  console.log(products.length);
  return (
    <div>
      <h1 className="text-center text-4xl"> Category Page</h1>
    </div>
  );
};

export default CategorProduct;
