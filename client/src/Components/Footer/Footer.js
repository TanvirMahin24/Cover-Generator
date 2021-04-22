import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assets/Footer/logo.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container className="py-5">
        <Row>
          <Col md={8}>
            <img src={logo} alt="Code Generator" />
            <div className="d-block pt-3">
              <Link className={styles.footer__link} to="/download">
                Download Now
              </Link>
              <Link className={styles.footer__link} to="/license">
                License
              </Link>
            </div>
            <div className="d-block pt-2">
              <Link className={styles.footer__link} to="/about">
                About
              </Link>
              <Link className={styles.footer__link} to="/license">
                Features
              </Link>
              <Link className={styles.footer__link} to="/license">
                Pricing
              </Link>
              <Link className={styles.footer__link} to="/license">
                Careers
              </Link>
              <Link className={styles.footer__link} to="/license">
                Help
              </Link>
              <Link className={styles.footer__link} to="/license">
                Privacy Policy
              </Link>
            </div>
            <div className="d-block pt-4">
              <span
                className={`d-block lead__2 text-light ${styles.copyright}`}
              >
                © 2021 Code Generator. All rights reserved
              </span>
            </div>
          </Col>
          <Col md={4} className="text-right">
            <span className={styles.get__app}>Get the App</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
