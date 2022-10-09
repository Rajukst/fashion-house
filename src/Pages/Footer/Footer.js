import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
       <Container fluid>
      <Row>
        <Col xs={12} md={6} lg={6}>1 of 2</Col>
        <Col xs={12} md={2} lg={2}>2 of 2</Col>
        <Col xs={12} md={2} lg={2}>3 of 3</Col>
        <Col xs={12} md={2} lg={2}>4 of 4</Col>
      </Row>
    
    </Container>
    </div>
  );
};

export default Footer;
