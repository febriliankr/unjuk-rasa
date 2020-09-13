import React from "react";
import NavbarLight from "../../NavbarLight";
import "./Tentang.css";
import { motion } from "framer-motion";

function Tentang() {
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
          <h1 className="title__container">More Than Meets The Eye</h1>
          <p className="text__container">Tentang Unjuk Rasa 2020</p>
        </motion.div>
      </div>
      <div className="blank-container">
        <h1>Unjuk Rasa</h1>
        <h2>Gw tunggu kontennya geng</h2>
      </div>
    </>
  );
}

export default Tentang;
