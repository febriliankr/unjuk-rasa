import React from "react";
import NavbarLight from "../../NavbarLight";
import "./WebSeries.css";
import { motion } from "framer-motion";

function WebSeries() {
  return (
    <>
      <NavbarLight />
      <div className="container exhibition__container ">
        <motion.div
          initial={{
            y: 50,
            opacity: 0,
          }}
          style={{ textAlign: "center" }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <h1>Web Series</h1>
          <p className="text__container">
            Sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </motion.div>
      </div>
      <div className="blank-container">
        <h1>The WebSeries</h1>
        <h2>Gw tunggu kontennya geng</h2>
      </div>
    </>
  );
}

export default WebSeries;
