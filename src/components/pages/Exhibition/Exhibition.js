import { motion } from "framer-motion";
import React from "react";
import NavbarLight from "../../NavbarLight";
import "./Exhibition.css";

function Exhibition() {
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
          <h1 className="title__container">Exhibition</h1>
          <p className="text__container">
            Online Exhibition pada Unjuk Rasa 2020 menampilkan berbagai karya
            seni dari mahasiswa Fakultas Kedokteran Universitas Indonesia.
          </p>
        </motion.div>
      </div>
      <div className="blank-container">
        <h1>Nungguin Konten</h1>
        <h2>Gw tunggu kontennya geng</h2>
      </div>
    </>
  );
}

export default Exhibition;
