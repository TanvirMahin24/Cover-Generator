import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <div className={styles.features}>
      <span className="d-block heading__2 text-center">Our Features</span>
      <span className="d-block lead__1 text-center">
        We love making your life easy by providing useful and effective features
      </span>
      <Container>
        <Row></Row>
      </Container>
    </div>
  );
};

export default Features;
