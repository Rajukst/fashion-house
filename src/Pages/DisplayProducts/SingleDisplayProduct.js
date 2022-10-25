import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleDisplayProduct = ({products, handleEvent}) => {
    const { name, image, description, imageTwo } = products;
    return (
        <div>
        <Col>
        <div className="p-3 image">
    
       <img
          className="image__img img-fluid"
          src={`data:image/jpeg;base64,${image}`}
          alt="abc"
        />
        <div className="image__overlay">
          <div className="image__title">{name}</div>
          <button onClick={()=>handleEvent(products)}> Add To Cart</button>
        </div>
      </div>
        </Col>
        </div>
    );
};

export default SingleDisplayProduct;