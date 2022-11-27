import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { NavbarLink } from "flowbite-react/lib/esm/components/Navbar/NavbarLink";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then((res) => {
        toast.success("Succesfully logedout ");
      })
      .catch((err) => {
        toast.error("error.message");
      });
  };
  return (
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
                alt="User settings"
                img={
                  user?.photoURL ||
                  "https://i.ibb.co/bBf5GbL/sergio-de-paula-c-Gmwf-HBDzk-unsplash.jpg"
                }
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
            <Dropdown.Item>Dashboard</Dropdown.Item>
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
        <Navbar.Link href="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
