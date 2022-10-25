import React from "react";
import { Nav, Navbar, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./MyHeader.css";
const MyHeader = () => {
  const {user, logOut}= useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">Home</Link>
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
              <i className="fa-regular fa-heart fa-2x"></i>
              </div>
              <div className="wishList">
                <Link className="me-5" to="/carts"><i className="fa-sharp fa-solid fa-cart-shopping fa-2x "></i><sup>0</sup></Link>
                
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
