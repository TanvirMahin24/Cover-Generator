import React from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import NavLogo from "./NavLogo/NavLogo";
import styles from "./Navbar.module.css";
import AppleStore from "../../Assets/Navbar/AppleAppStore.svg";
import GoogleStore from "../../Assets/Navbar/GooglePlay.svg";

const Navbar = () => {
  return (
    <Container>
      <BootstrapNavbar bg="none" variant="light" className={`${styles.navbar}`}>
        <BootstrapNavbar.Brand href="#home">
          <NavLogo />
        </BootstrapNavbar.Brand>
        <Nav className="">
          <Nav.Link href="#home" className={styles.nav__link}>
            Home
          </Nav.Link>
          <Nav.Link href="#features" className={styles.nav__link}>
            Features
          </Nav.Link>
          <Nav.Link href="#pricing" className={styles.nav__link}>
            Pricing
          </Nav.Link>
        </Nav>
        <div className={`${styles.nav__right}`}>
          <img src={GoogleStore} className="mr-3" alt="Google Store" />
          <img src={AppleStore} alt="Apple Store" />
        </div>
      </BootstrapNavbar>
    </Container>
  );
};

export default Navbar;
