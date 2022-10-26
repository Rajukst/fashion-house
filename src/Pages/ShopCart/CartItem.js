import React, { useContext } from 'react';
import CartContext from '../../AllContexts/Cart/CartContext';
const CartItem = ({item}) => {
    const {removeItem}= useContext(CartContext)
    return (
        <li className='CartItem__item'>
        <img
          className="image__img img-fluid"
          src={`data:image/jpeg;base64,${item.image}`}
          alt="abc"
        />
        <div>
          {item.name}
        </div>
        <button className='CartItem__button' onClick={() => removeItem(item._id)}>
          Remove
        </button>
      </li>
    );
};

export default CartItem;