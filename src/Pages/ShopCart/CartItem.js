import React, { useContext } from 'react';
import CartContext from '../../AllContexts/Cart/CartContext';
import "./CartItem.css";
const CartItem = ({item}) => {

    const {removeItem}= useContext(CartContext)
    return (
        <li className='CartItem__item'>
        <div>
          {item.name} {item.price}
        </div>
        <button className='CartItem__button' onClick={() => removeItem(item._id)}>
          Remove
        </button>
      </li>
    );
};

export default CartItem;