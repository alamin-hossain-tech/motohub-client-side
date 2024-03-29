import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";

import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useRole from "../../../Hooks/useRole";
import logo from "../../../Assets/logo-white.svg";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [role] = useRole(user?.email);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then((res) => {})
      .catch((err) => {});
  };
  const handleDashboard = () => {
    if (role.role === "buyer") {
      navigate("/dashboard/my-orders");
    } else if (role.role === "seller") {
      navigate("/dashboard/add-product");
    } else if (role.role === "admin") {
      navigate("/dashboard/sellers");
    }
  };
  return (
    <div className="bg-neutral-600">
      <div className="container mx-auto ">
        <Navbar fluid={true} className="bg-neutral-600 text-white">
          <Link to="/">
            <img
              src={logo}
              className="mr-3 h-6 md:h-9 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl lg:text-3xl font-semibold whitespace-nowrap ">
              MotoHub
            </span>
          </Link>

          <div className="flex md:order-2">
            {user?.email ? (
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={
                  <Avatar
                    alt=""
                    img={user?.photoURL}
                    rounded={true}
                    // bordered={true}
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">
                    {user?.displayName || "John Doe"}
                  </span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>

                <Dropdown.Item onClick={handleDashboard}>
                  Dashboard
                </Dropdown.Item>

                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
              </Dropdown>
            ) : (
              <div className="flex md:order-2">
                <Link to="login">
                  <Button>Login</Button>
                </Link>
              </div>
            )}
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="text-white">
            <NavLink className={"px-5 py-1"} to="/">
              Home
            </NavLink>
            <NavLink className={"px-5 py-1"} to="/category/1">
              Brwose Products
            </NavLink>
            <NavLink className={"px-5 py-1"} to="/blog">
              Blog
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
