import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const UpperFooter = () => {
  return (
    <div>
      <Container className="subscribe-container">
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="subscribers">
              <div className="mySubscribe">
                <h5>KNOW IT ALL FIRST!</h5>
                <h6>
                  Never Miss Anything From Multikart By Signing Up To Our
                  Newsletter.
                </h6>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="subscriberse">
              <div className="mySubscribes">
                <input type="text" placeholder="Enter Your Email" name="" id="" />
                <button className="ms-3 subscribe-button">Submit</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpperFooter;
