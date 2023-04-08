import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import CartContext from "../../../../AllContexts/Cart/CartContext";
import "./Checkout.css";

const Checkout = () => {

  // using useRef to getharing my data;
  const custoName = useRef();
  const phoneNum = useRef();
  const cusEmail = useRef();
  const custCountry = useRef();
  const custState = useRef();
  const custCity = useRef();
  const custPostal = useRef();
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  let initialAmount = 0;
  let productCount = "";
  let vat = 8;
  for (let newAmount of cartItems) {
    initialAmount = initialAmount + parseInt(newAmount.priceOne);
    productCount = productCount + newAmount.name;
  }
  console.log(initialAmount);
  const subtotal = (initialAmount / 100) * vat;
  console.log(subtotal);
  const grandTotal = initialAmount + subtotal;
  console.log(grandTotal);
  const submitData = (e) => {
    e.preventDefault();
    const name = custoName.current.value;
    const phone = phoneNum.current.value;
    const email = cusEmail.current.value;
    const country = custCountry.current.value;
    const state = custState.current.value;
    const city = custCity.current.value;
    const postal = custPostal.current.value;
    const totalOrderDetails = {
      name,
      phone,
      email,
      country,
      state,
      city,
      postal,
      cartItems
    };
    console.log(totalOrderDetails);
// const orderInformation= {cartItems}
    fetch("https://fashion-house-server.vercel.app/order-info", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(totalOrderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your order has been created',
            showConfirmButton: false,
            timer: 1500
          })
          e.target.reset();
          console.log(data);
        }
      });
  };

  return (
    <div>
      <Container>
        <form onSubmit={submitData}>
          <Row>
            <Col xs={12} md={7} lg={7}>
              <h2>Billing Details</h2>
              <div className="namingList">
                <div className="firstName">
                  <h6>Name</h6>
                  <input type="text" name="" id="" ref={custoName} required />
                </div>
                <div className="phone">
                  <h6>Phone Number</h6>
                  <input type="text" name="" id="" ref={phoneNum} required />
                </div>
                <div className="email">
                  <h6>Email</h6>
                  <input type="email" name="" id="" ref={cusEmail} />
                </div>
              </div>
              <div className="namingList">
                <h6>Country</h6>
                <div class="select">
                  <select ref={custCountry} name="format" id="format">
                    <option selected disabled>
                      Choose your Country
                    </option>
                    <option defaultValue="bd">Bangladesh</option>
                    <option defaultValue="ind">India</option>
                    <option defaultValue="pk">Pakisthan</option>
                    <option defaultValue="np">Nepal</option>
                    <option defaultValue="vt">Vutan</option>
                  </select>
                </div>
              </div>
              <div className="namingList">
                <div className="state">
                  <h6>State</h6>
                  <input
                    className="state"
                    type="text"
                    name=""
                    id=""
                    ref={custState}
                  />
                </div>
                <div className="state">
                  <h6>City</h6>
                  <input
                    className="state"
                    type="text"
                    name=""
                    id=""
                    ref={custCity}
                  />
                </div>
                <div className="state">
                  <h6>Street Address</h6>
                  <input
                    className="state"
                    type="text"
                    name=""
                    id=""
                    ref={custState}
                  />
                </div>
                <div className="states">
                  <h6>Postal Code</h6>
                  <input
                    className="state"
                    type="text"
                    name=""
                    id=""
                    ref={custPostal}
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className="head-corner">
                <div className="myPlaceOrder">
                  <div className="placeOrdre">
                    <h5>Item Name</h5>
                    <h5>Price</h5>
                  </div>
                  {cartItems.map((SinglePlaceOrder) => (
                    <div className="placeOrdr">
                      <h6>{SinglePlaceOrder.name}</h6>
                      <h6>{SinglePlaceOrder.price}</h6>
                    </div>
                  ))}
                </div>
                <div className="placeOrdre">
                  <h5>Subtotal: </h5>
                  <h5>
                    <span className="subAmount">{initialAmount}/=</span>
                  </h5>
                </div>
              </div>
              <div className="placeOrdre">
                <label className="toggler-wrapper style-1">
                  <input type="checkbox" />
                  <div className="toggler-slider">
                    <div className="toggler-knob"></div>
                  </div>
                  <h5 className="freeShipping">Place</h5>
                </label>
              </div>
              <button type="submit">Place Order</button>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default Checkout;