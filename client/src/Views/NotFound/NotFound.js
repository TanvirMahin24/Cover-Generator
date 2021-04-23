import React from "react";
import { Navbar } from "../../Components/Navbar";
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
