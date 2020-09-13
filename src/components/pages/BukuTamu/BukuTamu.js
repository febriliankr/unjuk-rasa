import React, { useState, useEffect } from "react";
import "./BukuTamu.css";
import { Button } from "../../Button";
import { motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";

function BukuTamu() {
  let countdown = 3;
  let history = useHistory();
  const [localDataExists, setLocalDataExists] = useState(false);

  const [visitor, setVisitor] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    console.log(visitor);
    setVisitor({
      ...visitor,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const data = localStorage.getItem("visitordata");
    //console.log(data);
    if (data) {
      setVisitor(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const localdata = localStorage.getItem("visitordata");
    const gen = JSON.parse(localdata);
    if (gen == null) {
      setLocalDataExists(false);
      console.log("empty");
    } else {
      setLocalDataExists(true);
      console.log(gen.email);
      console.log(gen.name);
      setTimeout(() => {
        history.push("/exhibition");
        countdown -= 1;
      }, 3000);

      //   console.log("localdata", localdata);
      //   console.log("gen", gen);
    }
  }, []);

  console.log(history.location.pathname);

  useEffect(() => {
    localStorage.setItem("visitordata", JSON.stringify(visitor));
  });

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
        {localDataExists ? (
          <div className="padding">
            <h2 className="padding">Welcome {visitor.name}!</h2>
            <div className="padding">Redirecting in few seconds.</div>
            <div className="padding">
              <Link to="/exhibition">
                <Button buttonStyle="btn--subtle" className="continue">
                  Continue
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h1>Buku Tamu</h1>
            <form className="register-form">
              <input
                name="name"
                key="name"
                type="name"
                placeholder="Nama Lengkap"
                className="register-input"
                onChange={handleChange}
                value={visitor.name}
              />
              <input
                name="email"
                type="email"
                key="email"
                placeholder="E-Mail"
                className="register-input"
                onChange={handleChange}
                value={visitor.email}
              />
              <Button buttonStyle="btn--subtle">Selanjutnya</Button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default BukuTamu;
