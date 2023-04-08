import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../AllContexts/Cart/CartContext";
import CartItem from "./CartItem";

import "./ShopCart.css"
const ShopCart = () => {
  const {showCart, cartItems, showHideCart}= useContext(CartContext)
  let initialAmount = 0;
  let productCount = '';
  for (let newAmount of cartItems) {
      initialAmount = initialAmount + parseInt(newAmount.priceOne);
      productCount = productCount + newAmount.name;
  }
  console.log(initialAmount)
  console.log(cartItems)
  return (
    <>

    <div className="shop">
      {showCart && (
        <div className='cart__wrapper'>
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
          </div>
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item._id}  item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className='Cart__cartTotal'>
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {initialAmount}
            </div>
          </div>
          <Link to="/cart"><button>View Cart</button></Link>
        </div>
      )}
    </div>
    </>
  );
};

export default ShopCart;
