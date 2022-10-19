import React from "react";
import { Col } from "react-bootstrap";

const HomeProductList = ({ allproduct }) => {
  const { _id, name, price, sku, image } = allproduct;
  return (
    <div>
      <Col>
        <div className="p-3 image">
          <img
            className="image__img img-fluid"
            src={`data:image/jpeg;base64,${image}`}
            alt="dynamic-image"
          />
          <div className="image__overlay">
            <div className="image__title">{name}</div>
            <p className="image__description">{price}</p>
            <p className="image__description">{sku}</p>
            <button>Order Now</button>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default HomeProductList;
