import React from "react";
import Home from "../pages/home";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import Contact from "../pages/contact";
import Services from "../pages/services";
import Doctor from "../pages/Doctors./doctors";
import DoctorDetails from "../pages/Doctors./doctorDetails";
import { Routes, Route } from "react-router-dom";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctorDetails" element={<DoctorDetails />} />
      </Routes>
    </>
  );
};

export default Routers;
