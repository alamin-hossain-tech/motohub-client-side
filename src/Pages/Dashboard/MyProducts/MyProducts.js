import { Chip } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Button, Spinner } from "flowbite-react";
import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useRole from "../../../Hooks/useRole";
import { getTime } from "../../../Utility/getTime";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [role] = useRole(user.email);
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`http://localhost:5000/products/${user.email}`).then((res) =>
        res.json()
      ),
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      fetch(`http://localhost:5000/product/delete/${id}`, {
        method: "POST",
        headers: {
          "content-type": "aplication/json",
        },
      })
        .then((res) => {
          toast.success("Deleted");
          refetch();
        })
        .catch((err) => console.error(err));
    }
  };
  const handleAdvertise = (id) => {
    const update = {
      advertise: "true",
      status: "Available",
    };
    console.log(update);

    if (window.confirm("Are you sure want to Advertise?")) {
      fetch(`http://localhost:5000/product/edit/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(update),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);

          toast.success("Updated");
          refetch();
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      {role.role === "seller" ? (
        <div>
          <h2 className="pt-8 pb-2 text-center text-2xl font-semibold">
            My Products
          </h2>
          <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-md overflow-hidden sm:shadow my-5">
            <thead className="text-white">
              {data.map((p, i) => (
                <tr
                  key={i}
                  className="bg-blue-600 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none  sm:mb-0"
                >
                  <th className="p-3 text-left border-grey-light border">Sl</th>
                  <th className="p-3 text-left border-grey-light border">
                    Name
                  </th>
                  <th className="p-3 text-left border-grey-light border">
                    Price
                  </th>
                  <th className="p-3 text-left border-grey-light border">
                    Status
                  </th>
                  <th className="p-3 text-left border-grey-light border">
                    Published
                  </th>
                  <th className="p-3 text-left border-grey-light border">
                    Advertise
                  </th>
                  <th
                    className="p-3 text-left border-grey-light border"
                    width="110px"
                  >
                    Actions
                  </th>
                </tr>
              ))}
            </thead>
            <tbody className="flex-1 sm:flex-none">
              {data.map((product, i) => (
                <tr
                  key={i}
                  className="flex flex-col flex-no wrap sm:table-row my-2 sm:mb-0"
                >
                  <td className="border-grey-light border hover:bg-gray-100 p-3">
                    {i + 1}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3">
                    <img
                      className="inline mr-2 rounded"
                      src={product.product_image}
                      alt=""
                      width={"50px"}
                    />
                    {product.name}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                    ${product.sell_price}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                    {product.status === "Sold" ? (
                      <Chip label="Sold" color="error" variant="outlined" />
                    ) : (
                      <Chip
                        label="Avilable"
                        color="success"
                        variant="outlined"
                      />
                    )}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                    {getTime(product.published_time)}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 cursor-pointer">
                    {product.status === "Available" &&
                      product.advertise === "true" && (
                        // <p className="font-semibold text-green-500"></p>
                        <Chip label="Advertised" color="success" />
                      )}
                    {/* {product.advertise === "false" &&
                      product.status === "Sold" && (
                        // <p className="font-semibold text-green-500"></p>
                        <Chip label="Soldout " color="info" />
                      )} */}
                    {product.advertise === "false" &&
                      product.status === "Available" && (
                        <Button
                          onClick={() => handleAdvertise(product._id)}
                          className="mx-auto"
                        >
                          Advertise
                        </Button>
                      )}
                  </td>
                  <td
                    onClick={() => handleDelete(product._id)}
                    className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Toaster></Toaster>
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center">
          <Spinner aria-label="Center-aligned spinner example" />
        </div>
      )}
    </div>
  );
};

export default MyProducts;
