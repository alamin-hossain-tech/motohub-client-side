import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layouts/Dashboard/Dashboard";
import Main from "../../Layouts/Main/Main";
import CategorProduct from "../../Pages/CategoryProduct/CategorProduct";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <Home></Home>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoutes>
            <CategorProduct></CategorProduct>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/sellers",
        element: <AllSeller></AllSeller>,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
]);
