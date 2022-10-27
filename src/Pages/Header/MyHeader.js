import React, { useContext } from "react";
import { Nav, Navbar, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./MyHeader.css";
import CartContext from "../../AllContexts/Cart/CartContext";
const MyHeader = () => {
  const {cartItems, showHideCart}= useContext(CartContext)
  const {user, logOut}= useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >       
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <div className="wishAndCart ps-5">
              <div className="wishList pe-5">   
              <i className="fa-regular fa-heart fa-3x"></i>
              </div>
              <div className='nav__right'>
                </div>
        <div className='cart__icon me-5'>
          <i
            className='fa fa-shopping-cart fa-3x'
            aria-hidden='true'
            onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            <div className='item__count'>
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
            </div>
            {user.email ? (
                <div className="ms-5"> Hi,{user.displayName} <Button onClick={logOut}>LogOut</Button></div> 
              ) : (
                <Link className="class-link" to="/login">
                  Login
                </Link>
              )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyHeader;
