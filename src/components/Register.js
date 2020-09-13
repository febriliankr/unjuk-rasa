import React from "react";
import "./Register.css";
import { Button } from "./Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { motion } from "framer-motion";

const Schema = yup.object().shape({
  name: yup.string().required().min(3),
  email: yup.string().required().email(),
  instansi: yup.string().required().min(2),
  whatsapp: yup.number().required().min(6),
});

function Register() {
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const labelClick = (e) => {
    //labelclick makes change to checkbox
  };

  //errors.instansi && console.log("error name", errors.instansi);

  console.log(errors);

  return (
    <div className="register-page">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.8,
        }}
        className="register-image"
      ></motion.div>

      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.8,
        }}
      >
        <div className="register-container">
          <section className="register-text">
            <h1 className="register-text-heading">Register</h1>
            <p className="register-text-text">Pendaftaran DCU 2020</p>
            <div className="input-areas">
              <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                  className={`register-input ${
                    errors.name ? "username-error" : null
                  }`}
                  name="name"
                  type="name"
                  placeholder="Nama Lengkap"
                  ref={register}
                />
                <p className="error-label">{errors.name?.message}</p>
                <input
                  className="register-input"
                  name="email"
                  type="email"
                  placeholder="Alamat Email"
                  ref={register}
                />
                <p className="error-label">{errors.email?.message}</p>
                <input
                  autoComplete="new-password"
                  className="register-input"
                  name="password"
                  type="password"
                  placeholder="Password"
                  ref={register}
                />
                <input
                  className={`register-input ${
                    errors.instansi ? "username-error" : null
                  }`}
                  name="instansi"
                  type="name"
                  placeholder="Asal Instansi"
                  ref={register}
                />
                <p className="error-label">{errors.instansi?.message}</p>
                <input
                  className="register-input"
                  name="whatsapp"
                  type="tel"
                  placeholder="Nomor Whatsapp"
                  ref={register}
                />
                <p className="error-label">{errors.whatsapp?.message}</p>

                <label className="newsletter-label" onClick={labelClick}>
                  <input
                    name="receiveNewsletter"
                    type="checkbox"
                    ref={register}
                  />
                  <span className="newsletter-label-text">
                    Saya ingin menerima newsletter dari DCU
                  </span>
                </label>

                <div className="pt-1">
                  <Button buttonStyle="btn--evoblue" onClick={handleSubmit}>
                    Register
                  </Button>
                </div>
              </form>
            </div>
          </section>
          {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
        </div>
      </motion.div>
    </div>
  );
}

export default Register;
