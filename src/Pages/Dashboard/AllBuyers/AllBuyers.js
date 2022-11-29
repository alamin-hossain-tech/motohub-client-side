import { useQuery } from "@tanstack/react-query";
import { Checkbox, Spinner, Table } from "flowbite-react";
import React, { useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaLock } from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useRole from "../../../Hooks/useRole";

const AllBuyers = () => {
  const { user, setBuyer } = useContext(AuthContext);
  const [role] = useRole(user.email);

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users?role=buyer"],
    queryFn: () =>
      fetch(`http://localhost:5000/users?role=buyer`).then((res) => res.json()),
  });
  console.log(data.length);
  useEffect(() => {
    if (data) {
      setBuyer(data);
    }
  });
  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      fetch(`http://localhost:5000/users/delete/${id}`, {
        method: "POST",
        headers: {
          "content-type": "aplication/json",
        },
        body: JSON.stringify(id),
      })
        .then((res) => {
          toast.success("Deleted");
          refetch();
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <div>
      {role.role === "admin" ? (
        <div>
          <h2 className="pt-8 pb-2 text-center text-2xl font-semibold">
            All Buyers
          </h2>
          <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-md overflow-hidden sm:shadow my-5">
            <thead class="text-white">
              {data.map((u, i) => (
                <tr
                  key={i}
                  class="bg-blue-600 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none  sm:mb-0"
                >
                  <th class="p-3 text-left border-grey-light border">Sl</th>
                  <th class="p-3 text-left border-grey-light border">Name</th>
                  <th class="p-3 text-left border-grey-light border">Email</th>
                  <th class="p-3 text-left border-grey-light border">Role</th>
                  <th
                    class="p-3 text-left border-grey-light border"
                    width="110px"
                  >
                    Actions
                  </th>
                </tr>
              ))}
            </thead>
            <tbody class="flex-1 sm:flex-none">
              {data.map((user, i) => (
                <tr
                  key={i}
                  class="flex flex-col flex-no wrap sm:table-row my-2 sm:mb-0"
                >
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    {i + 1}
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    {user.name}
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                    {user.email}
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                    {user.role}
                  </td>
                  <td
                    onClick={() => handleDelete(user._id)}
                    class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"
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

export default AllBuyers;
