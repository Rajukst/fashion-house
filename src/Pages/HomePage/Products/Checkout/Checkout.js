import React from "react";
import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartContext from "../../../../AllContexts/Cart/CartContext";
import "./Checkout.css";
const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  let initialAmount = 0;
  let productCount = "";
  let vat = 8;
  for (let newAmount of cartItems) {
    initialAmount = initialAmount + parseInt(newAmount.price);
    productCount = productCount + newAmount.name;
  }
  console.log(initialAmount);
  const subtotal = (initialAmount / 100) * vat;
  console.log(subtotal);
  const grandTotal = initialAmount + subtotal;
  console.log(grandTotal);
  return (
    <div>
      <Container>
        <form>
          <Row>
            <Col xs={12} md={7} lg={7}>
              <h2>Billing Details</h2>
              <div className="namingList">
                <div className="firstName">
                  <h6>Name</h6>
                  <input type="name" name="" id="" />
                </div>
                <div className="phone">
                  <h6>Phone Number</h6>
                  <input type="name" name="" id="" />
                </div>
                <div className="email">
                  <h6>Email</h6>
                  <input type="email" name="" id="" />
                </div>
              </div>
              <div className="namingList">
                <h6>Country</h6>
                <div class="select">
                  <select name="format" id="format">
                    <option selected disabled>
                      Choose your Country
                    </option>
                    <option value="bd">Bangladesh</option>
                    <option value="ind">India</option>
                    <option value="pk">Pakisthan</option>
                    <option value="np">Nepal</option>
                    <option value="vt">Vutan</option>
                  </select>
                </div>
              </div>
              <div className="namingList">
                <div className="state">
                  <h6>State</h6>
                  <input className="state" type="text" name="" id="" />
                </div>
                <div className="state">
                  <h6>City</h6>
                  <input className="state" type="text" name="" id="" />
                </div>
                <div className="state">
                  <h6>Street Address</h6>
                  <input className="state" type="text" name="" id="" />
                </div>
                <div className="states">
                  <h6>Postal Code</h6>
                  <input className="state" type="text" name="" id="" />
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
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default Checkout;
{
  /* <h5>Total Amount: {initialAmount}</h5> */
}

{
  /* <h5>Total Amount: {grandTotal}</h5> */
}
