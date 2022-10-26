import React, { useEffect, useState, useContext } from "react";
import CartContext from "../../AllContexts/Cart/CartContext";

const ShopCart = () => {
  const {showCart, cartItems, showHideCart}= useContext(CartContext)
  
  return (
    <div className="shop">
      {showCart && (
        <div className="showMyCart">
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
                  <CartI
                ))}
              </ul>
            )}
          </div>
          <div>Cart Total</div>
        </div>
      )}
      <h1>This is Shop</h1>
    </div>
  );
};

export default ShopCart;
