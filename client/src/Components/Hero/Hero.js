import React from "react";
import { Container } from "react-bootstrap";
import HeroImg from "../../Assets/Hero/heroImg.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={`${styles.left} my-auto`}>
        <div className="pb-5">
          <h1 className="heading__1">Cover Generator</h1>
          <span className="d-block heading__4 pb-5">
            Easiest way to make your cover pages
          </span>
        </div>
      </div>
      <div className={styles.right}>
        <img src={HeroImg} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
