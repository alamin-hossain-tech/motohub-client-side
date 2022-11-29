import { Sidebar } from "flowbite-react";
import React, { useContext, useState } from "react";
import { FaUsers, FaRegMoneyBillAlt } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import FooterMain from "../../Pages/Shared/FooterMain/FooterMain";
import Header from "../../Pages/Shared/Header/Header";
import { AiOutlineCar } from "react-icons/ai";
import useRole from "../../Hooks/useRole";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { SellRounded } from "@mui/icons-material";

const Dashboard = () => {
  const { user, buyer, seller } = useContext(AuthContext);
  const [role] = useRole(user?.email);
  const userRole = role.role;

  return (
    <div>
      <Header></Header>
      <div className="flex flex-col lg:flex-row container mx-auto h-screen gap-6 ">
        <Sidebar className="h-auto lg:h-full">
          <React.Fragment key=".0">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                {userRole === "admin" && (
                  <Link to="/dashboard/all-buyers">
                    <Sidebar.Item
                      href="#"
                      icon={function noRefCheck() {
                        return (
                          <FaRegMoneyBillAlt className="inline"></FaRegMoneyBillAlt>
                        );
                      }}
                      label={buyer.length.toString()}
                      labelColor="gray"
                    >
                      All Buyers
                    </Sidebar.Item>
                  </Link>
                )}
                {userRole === "admin" && (
                  <Link to="/dashboard/sellers">
                    <Sidebar.Item
                      href="#"
                      icon={function noRefCheck() {
                        return <BsShop className="inline"></BsShop>;
                      }}
                      label={seller.length.toString()}
                      labelColor="gray"
                    >
                      All Sellers
                    </Sidebar.Item>
                  </Link>
                )}
                {userRole === "seller" && (
                  <Link to="/dashboard/add-product">
                    <Sidebar.Item
                      icon={function noRefCheck() {
                        return <AiOutlineCar className="inline"></AiOutlineCar>;
                      }}
                    >
                      Add Product
                    </Sidebar.Item>
                  </Link>
                )}
                {userRole === "seller" && (
                  <Link to="/dashboard/my-products">
                    <Sidebar.Item
                      icon={function noRefCheck() {
                        return <AiOutlineCar className="inline"></AiOutlineCar>;
                      }}
                      label="0"
                      labelColor="gray"
                    >
                      My Products
                    </Sidebar.Item>
                  </Link>
                )}
                {userRole === "buyer" && (
                  <Link to="/dashboard/my-orders">
                    <Sidebar.Item
                      icon={function noRefCheck() {
                        return <AiOutlineCar className="inline"></AiOutlineCar>;
                      }}
                      label="Pro"
                      labelColor="gray"
                    >
                      My Orders
                    </Sidebar.Item>
                  </Link>
                )}
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </React.Fragment>
        </Sidebar>
        <div className="w-full">
          <Outlet></Outlet>
        </div>
      </div>
      <FooterMain></FooterMain>
    </div>
  );
};

export default Dashboard;
