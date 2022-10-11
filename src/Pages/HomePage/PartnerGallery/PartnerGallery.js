import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./PartnerGallery.css"
import { Col, Container, Row } from "react-bootstrap";
const PartnerGallery = () => {
  var settings = {
    dots: false,
    infinite: true,

    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h1>This is SponcerPartner</h1>
      <Container fluid>
        <Row className="p-3">
            <Col>
            <Slider {...settings}>
                <div>
                    <h1>1</h1>
                </div>
                <div>
                    <h1>2</h1>
                </div>
                <div>
                    <h1>3</h1>
                </div>
                <div>
                    <h1>4</h1>
                </div>
                <div>
                    <h1>5</h1>
                </div>
                <div>
                    <h1>6</h1>
                </div>
                <div>
                    <h1>7</h1>
                </div>
                <div>
                    <h1>8</h1>
                </div>
                <div>
                    <h1>9</h1>
                </div>
                <div>
                    <h1>10</h1>
                </div>
          </Slider>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PartnerGallery;
