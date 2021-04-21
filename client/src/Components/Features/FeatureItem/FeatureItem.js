import React from "react";
import { Col } from "react-bootstrap";

const FeatureItem = ({ title, description, image }) => {
  return (
    <Col xs={6} md={4} className="text-center p-4">
      <img src={image} alt={title} />
      <span className="d-block heading__5">{title}</span>
      <span className="d-block body__1">{description}</span>
    </Col>
  );
};

export default FeatureItem;
