import React from "react";
import { Header } from "../../Components/Header";
import Hero from "../../Components/Hero/Hero";
import { Navbar } from "../../Components/Navbar";

const LandingPage = () => {
  return (
    <>
      <Header>
        <Navbar />
        <Hero />
      </Header>
    </>
  );
};

export default LandingPage;
