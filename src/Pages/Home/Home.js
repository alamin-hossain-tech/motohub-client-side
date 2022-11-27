import React from "react";
import Hero from "./Hero/Hero";
import { GoVerified } from "react-icons/go";
import { Sidebar } from "flowbite-react";
import Advertise from "./Hero/Advertise/Advertise";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Advertise></Advertise>
    </div>
  );
};

export default Home;
