import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../Ratings/Rating';
import CartContext from "../../AllContexts/Cart/CartContext"
import formatCurrency from 'format-currency';


const SingleDisplayProduct = ({products}) => {
  let opts = { format: "%s%v", symbol: "€" };
const {addToCart}= useContext(CartContext)
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
          <div className='ProductCard__price'>
          <h5>{formatCurrency(`${products.price}`, opts)}</h5>
        </div>
          <div className="rattings">
            <Rating value={products.rating} text={`${products.numReviews} reviews`}/>
          </div>
          <button onClick={()=>addToCart(products)}> Add To Cart</button>
        </div>
      </div>
        </Col>
        </div>
    );
};

export default SingleDisplayProduct;