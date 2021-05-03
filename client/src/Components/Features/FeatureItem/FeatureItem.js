import React from "react";
import { Col } from "react-bootstrap";

const FeatureItem = ({ title, description, image, id }) => {
  return (
    <Col
      xs={6}
      md={4}
      className="text-center p-4"
      data-aos="fade-left"
      data-aos-delay={id * 250}
    >
      <img src={image} alt={title} />
      <span className="d-block heading__5">{title}</span>
      <span className="d-block body__1">{description}</span>
    </Col>
  );
};

export default FeatureItem;
