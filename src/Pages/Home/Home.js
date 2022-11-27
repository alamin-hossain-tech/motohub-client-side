import React from "react";
import Hero from "./Hero/Hero";
import { GoVerified } from "react-icons/go";
import { Sidebar } from "flowbite-react";
import Advertise from "./Advertise/Advertise";
import Category from "./Category/Category";
import Banner from "./Banner/Banner";
import { Divider } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Advertise></Advertise>
      <Category></Category>
      <Banner></Banner>
      <Divider style={{ margin: "60px 0px" }} />
    </div>
  );
};

export default Home;
