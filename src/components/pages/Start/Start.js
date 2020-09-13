import React, { useState } from "react";
import "./Start.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Start = ({ isVisible }) => {

  return (
    <div className="container">
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        style={{ textAlign: "center" }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <h1>Unjuk Rasa</h1>

        <div>
          <img
            src="white-logo.png"
            alt="unjuk rasa"
            className="image__logo"
          ></img>
        </div>

        <div>
          <Link to="/buku-tamu">
            <Button buttonStyle="btn--subtle">Mulai</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Start;
