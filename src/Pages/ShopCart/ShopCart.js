import React, { useEffect, useState } from "react";

const ShopCart = ({ cartItem, setCartItem, handleOnChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (_id) => {
    const arr = cartItem.filter((item) => item._id !== _id);
    setCartItem(arr);
    handlePrice();
  };
  const handlePrice = () => {
    let ans = 0;
    cartItem.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  }, []);
  return (
    <div>
      <article>
        {cartItem.map((item) => (
          <div className="cart-box" key={item._id}>
            <div className="cart-image">
              <img
                className="image__img img-fluid"
                src={`data:image/jpeg;base64,${item.image}`}
                alt="dynamic-image"
              />
              <p>{item.price}</p>
            </div>
           <div className="all-PriceButtons">
           <button onClick={() => handleOnChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={()=>handleOnChange(item, -1)}>-</button>
            <span>{item.price}</span>
            <button onClick={()=>handleRemove(item._id)}>Remove</button>
           </div>
            <div className="total">
                <span>Total Price of Your cart</span>
                <span>Tk: {price}</span>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
};

export default ShopCart;
