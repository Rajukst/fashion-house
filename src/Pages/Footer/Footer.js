import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import coverLogo from "../../Images/cover.png";
import paymentLogo from "../../Images/sslcommerze.png";
import { Link } from "react-router-dom";
import UpperFooter from "./UpperFooter";
const Footer = () => {
  return (
    <>
    <div className="footers">
      <Container>
        <UpperFooter></UpperFooter>
        <Row className="pt-5">
          <Col xs={12} md={3} lg={3}>
            <div className="left-side pe-5">
              <img
                className="img-fluid"
                src={coverLogo}
                alt="footer-logo"
                width="150"
                height="75"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <div className="iconsFont">
              <Link><i className="fa-brands fa-facebook-f"></i></Link>
              <Link><i className="fa-brands fa-google-plus-g"></i></Link>
              <Link><i className="fa-brands fa-twitter"></i></Link>
              <Link><i className="fa-brands fa-instagram"></i></Link>
              </div>
            </div>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <h5 className="my-account">MY ACCOUNT</h5>
            <div className="account-links">
               <div className="women">
               <Link>Womens</Link>
               </div>
                <div className="clothing">
                <Link>Clothing</Link>
                </div>
                <div className="accessories">
                <Link>Accessories</Link>
                </div>
             <div className="featured">
             <Link>Featured</Link>
             </div>
            </div>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <h5 className="choose">WHY WE CHOOSE</h5>
          <div className="account-links">
               <div className="women">
               <Link>Shipping & Return</Link>
               </div>
                <div className="clothing">
                <Link>Secure Shopping</Link>
                </div>
                <div className="accessories">
                <Link>Gallary</Link>
                </div>
             <div className="featured">
             <Link>Affiliates</Link>
             </div>
             <div className="featured">
             <Link>Contact</Link>
             </div>
            </div>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <h5 className="choose">STORE INFORMATION</h5>
          <div className="account-links">
               <div className="women">
               <Link>Shipping & Return</Link>
               </div>
                <div className="clothing">
                <Link>Secure Shopping</Link>
                </div>
                <div className="accessories">
                <Link>Gallary</Link>
                </div>
             <div className="featured">
             <Link>Affiliates</Link>
             </div>
             <div className="featured">
             <Link>Contact</Link>
             </div>
            </div>
          </Col>
        </Row>
        <Row>
            <Col xs={12} md={6} lg={6}>
                <div className="copyRight mt-4">
                <h5>&copy; All Right Reserved. Powered By Dream Maker</h5>
                </div>
                </Col>
            <Col xs={12} md={6} lg={6}>
                <img className="img-fluid" src={paymentLogo} alt="payment logo" />
            </Col>
        </Row>
      </Container>
    </div>
        </>
  );
};

export default Footer;
