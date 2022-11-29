import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { NavbarLink } from "flowbite-react/lib/esm/components/Navbar/NavbarLink";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useRole from "../../../Hooks/useRole";

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
      navigate("/dashboard/all-buyers");
    }
  };
  return (
    <div className="container mx-auto py-2">
      <Navbar fluid={true} rounded={true}>
        <Link to="/">
          <Navbar.Brand>
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite
            </span>
          </Navbar.Brand>
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

              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
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
          <Link to="/">
            <Navbar.Link>Home</Navbar.Link>
          </Link>
          <Navbar.Link>About</Navbar.Link>
          <Navbar.Link>Services</Navbar.Link>
          <Navbar.Link>Pricing</Navbar.Link>
          <Navbar.Link>Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
