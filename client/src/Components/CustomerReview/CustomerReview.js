import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import quoteImg from "../../Assets/CustomerReview/quote.svg";
import styles from "./CustomerReview.module.css";

const CustomerReview = () => {
  return (
    <div className={styles.customer_review}>
      <Container className="py-5">
        <Row>
          <Col>
            <img src={quoteImg} alt="" />
            <span className={`d-block heading__2 px-5 ${styles.title}`}>
              Real Stories from Real Customers
            </span>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomerReview;
