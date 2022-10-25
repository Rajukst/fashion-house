import React from 'react';

const Cart = (props) => {
    const {getCart}= props;
    console.log(getCart);
    let initialAmount = 0;
    let productCount = '';
    for (let newAmount of getCart) {
        initialAmount = initialAmount + parseInt(newAmount.price);
        productCount = productCount + newAmount.name
        console.log(initialAmount)
    }
    return (
        <div>
             <h1> Your Cart Summary</h1>
            <h3> Total Product Added: {props.getCart.length} </h3>
            <h4> Total Cost: {initialAmount}</h4>
        </div>
    );
};

export default Cart;