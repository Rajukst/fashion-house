import React from "react";
import { Col } from "react-bootstrap";

import "./ProductLists.css";
const ProductsList = ({ allProducts }) => {
  const { name, image, description, imageTwo } = allProducts;
  return (
    <Col>
      <div className="p-3 image">
        <img
          className="image__img img-fluid"
          src={`data:image/jpeg;base64,${image}`}
          alt="dynamic-image"
        />
        <div className="image__overlay">
          <div className="image__title">{name}</div>
          <p className="image__description">{description}</p>
          <button>Order Now</button>
        </div>
      </div>
    </Col>
  );
};

export default ProductsList;
