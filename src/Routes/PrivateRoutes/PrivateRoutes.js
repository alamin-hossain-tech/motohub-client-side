import { Spinner } from "flowbite-react";
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();
  console.log(loading);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
