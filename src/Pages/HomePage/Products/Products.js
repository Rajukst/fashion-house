import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../../AllContexts/Cart/CartContext";
import Cart from "./Cart";
import "./Product.css"
const Products = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  console.log(cartItems);
  return (
    <Container>
      <Row>
        <Col className="rowi-one">
            {cartItems.length === 0 ? (
              <h4>Your Cart is Empty</h4>
            ) : (
              <>
                {cartItems.map((items, index) => (
                  <Cart key={items._id} cartItem={items} index={index}></Cart>
                ))}
              </>
            )}
        </Col>
        <div className="allButtons">
          <button className="contShopping">Continue Shopping</button>
          <Link to="/checkout"><button>Checkout</button></Link>
        </div>
      </Row>
    </Container>
  );
};

export default Products;
