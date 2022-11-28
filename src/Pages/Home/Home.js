import React from "react";
import Hero from "./Hero/Hero";
import { GoVerified } from "react-icons/go";
import { Sidebar } from "flowbite-react";
import Advertise from "./Advertise/Advertise";
import Category from "./Category/Category";
import Banner from "./Banner/Banner";
import { Divider } from "@mui/material";
import Service from "./Service/Service";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Advertise></Advertise>
      <Category></Category>
      <Banner></Banner>
      <Service></Service>
    </div>
  );
};

export default Home;
