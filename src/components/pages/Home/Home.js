import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjMg } from "./Data";

function Home() {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjMg} />
    </div>
  );
}

export default Home;
