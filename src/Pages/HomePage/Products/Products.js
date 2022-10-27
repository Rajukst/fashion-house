import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CartContext from '../../../AllContexts/Cart/CartContext';
import Cart from './Cart';



const Products = () => {
const {cartItems, removeItem}= useContext(CartContext);
    return (
      <Container fluid>
        <Row>
      <Col className='rowi-one' xs={12} md={8} lg={8}>
      <Row>
      {cartItems.length === 0 ? (
  <h4>Cart is Empty</h4>
) : (
  <>
    {
      cartItems.map((items, index)=> <Cart
      key={items._id}
      cartItem={items}
      index={index}
      ></Cart> )
    }
  </>
)}
      </Row>
      </Col>
      <Col className='rowi-ones' xs={12} md={4} lg={4}>
      <h1>This is Right</h1>
      </Col>
      </Row>
    </Container>
    );
};

export default Products;



