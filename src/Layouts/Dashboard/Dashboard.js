import { Footer, Sidebar } from "flowbite-react";
import React from "react";
import { FaUsers, FaRegMoneyBillAlt } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import FooterMain from "../../Pages/Shared/FooterMain/FooterMain";
import Header from "../../Pages/Shared/Header/Header";
import { AiOutlineCar } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex container mx-auto h-screen">
        <Sidebar>
          <React.Fragment key=".0">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Link to="/dashboard">
                  <Sidebar.Item
                    href="#"
                    icon={function noRefCheck() {
                      return (
                        <FaRegMoneyBillAlt className="inline"></FaRegMoneyBillAlt>
                      );
                    }}
                    label="Pro"
                    labelColor="gray"
                  >
                    All Buyers
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard/sellers">
                  <Sidebar.Item
                    href="#"
                    icon={function noRefCheck() {
                      return <BsShop className="inline"></BsShop>;
                    }}
                    label="Pro"
                    labelColor="gray"
                  >
                    All Sellers
                  </Sidebar.Item>
                </Link>
                <Link to="/dashboard/add-product">
                  <Sidebar.Item
                    href="#"
                    icon={function noRefCheck() {
                      return <AiOutlineCar className="inline"></AiOutlineCar>;
                    }}
                    label="Pro"
                    labelColor="gray"
                  >
                    Add Product
                  </Sidebar.Item>
                </Link>
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
