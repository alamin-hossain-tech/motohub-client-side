import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { NavbarLink } from "flowbite-react/lib/esm/components/Navbar/NavbarLink";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useRole from "../../../Hooks/useRole";
import logo from "../../../Assets/Logo.svg";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [role] = useRole(user?.email);
  const navigate = useNavigate();
  console.log(role.role);

  const handleLogout = () => {
    logOut()
      .then((res) => {
        toast.success("Succesfully logedout ");
      })
      .catch((err) => {
        toast.error("error.message");
      });
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
    <div className="container mx-auto py-2">
      <Navbar fluid={true} rounded={true}>
        <Link>
          <img src={logo} className="mr-3 h-12 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white text-[#4366B0]">
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

              <Dropdown.Item onClick={handleDashboard}>Dashboard</Dropdown.Item>

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
        <Navbar.Collapse>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/category/1">Brwose Products</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
