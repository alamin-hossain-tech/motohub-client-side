import React from "react";
import Hero from "./Hero/Hero";

import Advertise from "./Advertise/Advertise";
import Category from "./Category/Category";
import Banner from "./Banner/Banner";

import Service from "./Service/Service";
import SetTabTitle from "../../Utility/SetTabTitle";
import WhyChoose from "./WhyChoose/WhyChoose";
import Testimonial from "./Testimonial/Testimonial";
import Features from "./Features/Features";
import FAQ from "./FAQ/FAQ";
import NewsBlog from "./NewsBlog/NewsBlog";
import Subscribe from "./Subscribe/Subscribe";

const Home = () => {
  SetTabTitle("Home");
  return (
    <div className="bg-white">
      <Hero></Hero>
      <WhyChoose></WhyChoose>
      <Advertise></Advertise>
      <Features></Features>
      {/* <Category></Category> */}
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <Subscribe></Subscribe>
      <Banner></Banner>
      <NewsBlog></NewsBlog>
      <Service></Service>
    </div>
  );
};

export default Home;
