import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjAbout } from "./Data";
//import Pricing from '../../Pricing'

function About() {
  return (
    <div>
      <HeroSection {...homeObjAbout} />
      {/* <Pricing/> */}
    </div>
  );
}

export default About;
