import React from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import NavLogo from "./NavLogo/NavLogo";
import styles from "./Navbar.module.css";
import AppleStore from "../../Assets/Navbar/AppleAppStore.svg";
import GoogleStore from "../../Assets/Navbar/GooglePlay.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <BootstrapNavbar
        bg="none"
        collapseOnSelect
        expand="md"
        variant="light"
        className={`${styles.navbar}`}
      >
        <BootstrapNavbar.Brand href="#home">
          <NavLogo />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className={styles.nav__link}>
              Home
            </Nav.Link>
            <Nav.Link href="#features" className={styles.nav__link}>
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" className={styles.nav__link}>
              Pricing
            </Nav.Link>
          </Nav>
          <Nav className={`ml-auto ${styles.nav__right}`}>
            <Nav.Link href="#features" className={styles.store_img}>
              <img src={GoogleStore} className="mr-3" alt="Google Store" />
            </Nav.Link>
            <Nav.Link href="#pricing" className={styles.store_img}>
              <img src={AppleStore} alt="Apple Store" />
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </Container>
  );
};

export default Navbar;
