import React from "react";
import { Navbar } from "../../Components/Navbar";
import { Hero } from "../../Components/Hero";
import { Footer } from "../../Components/Footer";
import { Error } from "../../Components/Error";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Error />
      <Footer />
    </>
  );
};

export default NotFound;
