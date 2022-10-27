import React from "react";
import HeroSection from "./components/HeroSection";

const Home = () => {
  const data = {
    name: "Modern Crop Marketing System",
  };
  return <HeroSection myData={data} />;
};

export default Home;
