import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjMg } from "./Data";
import Pricing from "../../Pricing";

function DcuMg() {
  return (
    <div>
      <HeroSection {...homeObjMg} />
      <Pricing />
    </div>
  );
}

export default DcuMg;
