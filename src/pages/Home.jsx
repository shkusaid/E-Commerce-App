import React from "react";
import Carousal from "../components/Carousal";
import Features from "../components/Features";
import MidBanner from "../components/MidBanner";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Carousal />
      <MidBanner />
      <Features />
    </div>
  );
};

export default Home;
