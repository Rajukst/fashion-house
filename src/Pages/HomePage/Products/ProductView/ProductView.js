import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductView.css";
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION,
    MagnifierContainer,
    MagnifierZoom,
    MagnifierPreview
  } from "react-image-magnifiers";
const ProductView = () => {
    //image magnifier

    //finish
  const { userId } = useParams();
  const [viewProduct, setViewProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/productInfo/${userId}`)
      .then((res) => res.json())
      .then((data) => setViewProduct(data));
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>1 of 1</Col>
          <Col>
          <GlassMagnifier
  imageSrc={`data:image/jpeg;base64,${viewProduct.image}`}
  imageAlt="Example"
  largeImageSrc="./large-image.jpg" // Optional
/>
     
          </Col>
          <Col>
            <h3>{viewProduct.name}</h3>
            <h3 className="priceSection">${viewProduct.price}</h3>
            <h6>Select Size</h6>
            <h6>Quantity</h6>
            <div className="buttonsCarts">
              <button>ADD TO CART</button>
              <button>BUY NOW</button>
            </div>
            <h6>Product Details</h6>
            <p>{viewProduct.description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ProductView;
