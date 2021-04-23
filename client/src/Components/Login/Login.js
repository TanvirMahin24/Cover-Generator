import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import DarkSidebar from "../DarkSidebar/DarkSidebar";
import { LoginForm } from "./LoginForm";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <Container className={`p-5 ${styles.left}`}>
        <span className="d-block heading__2 pb-4">Login</span>
        <Row>
          <Col className="">
            <Card className={styles.login__card}>
              <Card.Body>
                <LoginForm />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <DarkSidebar />
    </div>
  );
};

export default Login;
