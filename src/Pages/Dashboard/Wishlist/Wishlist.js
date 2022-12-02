import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const { data: wishlistData = [], refetch } = useQuery({
    queryKey: ["users?role=buyer"],
    queryFn: () =>
      fetch(`http://localhost:5000/wishlist?email=${user.email}`).then((res) =>
        res.json()
      ),
  });

  return (
    <div>
      <p>{wishlistData?.length}</p>
    </div>
  );
};

export default Wishlist;
