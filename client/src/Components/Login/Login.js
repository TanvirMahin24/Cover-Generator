import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import DarkSidebar from "../DarkSidebar/DarkSidebar";
import { LoginForm } from "./LoginForm";
import styles from "./Login.module.css";
import RegForm from "./RegForm/RegForm";

const Login = ({ reg }) => {
  return (
    <div className={styles.login} data-aos="fade-down">
      <Container className={`p-5 ${styles.left}`}>
        <span className="d-block heading__2 pb-4">
          {reg ? "Register" : "Login"}
        </span>
        <Row>
          <Col className="">
            <Card className={styles.login__card} data-aos="fade-down-right">
              <Card.Body>{reg ? <RegForm /> : <LoginForm />}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <DarkSidebar />
    </div>
  );
};

export default Login;
