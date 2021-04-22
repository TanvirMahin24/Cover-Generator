import React from "react";
import CustomerReview from "../../Components/CustomerReview/CustomerReview";
import { Features } from "../../Components/Features";
import Footer from "../../Components/Footer/Footer";
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
      <Features />
      <CustomerReview />
      <Footer />
    </>
  );
};

export default LandingPage;
