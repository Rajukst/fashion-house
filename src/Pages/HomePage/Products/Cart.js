import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import CartContext from "../../../AllContexts/Cart/CartContext";
import "./Cart.css";
const Cart = ({ cartItem }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <>
      <Col xs={12} md={12} lg={12}>
        <div className="cart-holder">
          <div className="loaders">
            <div className="details-holder">
              <img
                className="image__img img-fluid my-images"
                src={`data:image/jpeg;base64,${cartItem.image}`}
                style={{ maxHeight: "50px", maxWidth: "50px" }}
                alt="dynamic-image"
              />
              <p>Name: {cartItem.name}</p>
              <p>Price: {cartItem.price} </p>
              <p>Description: {cartItem.description.slice(0,20)}</p>
              <button
                className="CartItem__button"
                onClick={() => removeItem(cartItem._id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Cart;
