import React from "react";
import { Col } from "react-bootstrap";

import "./ProductLists.css";
const ProductsList = (props) => {
  const { name, image, description, imageTwo } = props.products;
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
          <button onClick={() => props.addCart(props.products)}> Add To Cart</button>
        </div>
      </div>
    </Col>
  );
};

export default ProductsList;
