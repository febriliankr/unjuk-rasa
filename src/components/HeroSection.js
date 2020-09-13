import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import { motion, AnimatePresence } from "framer-motion";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  link
}) {
  return (
    <AnimatePresence>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                }}
              >
                <div className="home__hero-text-wrapper">
                  <div className="top-line">{topLine}</div>
                  <h1 className={lightText ? "heading" : "heading dark"}>
                    {headline}
                  </h1>
                  <p
                    className={
                      lightTextDesc
                        ? "home__hero-subtitle"
                        : "home__hero-subtitle dark"
                    }
                  >
                    {description}
                  </p>
                  <Link to={link}>
                    <Button
                      buttonSize="btn--wide"
                      buttonStyle={
                        lightBg ? "btn--evoblue" : "btn--evoblue-light"
                      }
                    >
                      {buttonLabel}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="col">
              <div className="home__hero-img-wrapper">
                <motion.div
                  initial={{
                    x: 100,
                    opacity: 0
                  }}
                  animate={{
                    x: 0,
                    opacity: 1
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.7,
                  }}
                >
                  <img src={img} alt={alt} className="home__hero-img" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default HeroSection;
