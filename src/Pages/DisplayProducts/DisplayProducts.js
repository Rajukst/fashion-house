import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ShopCart from '../ShopCart/ShopCart';
import SingleDisplayProduct from './SingleDisplayProduct';

const DisplayProducts = () => {
    const [cartItem, setCartItem]= useState([])
    const [displayProducts, setDisplayProducts]= useState([])
    useEffect(()=>{
        fetch( fetch("http://localhost:5000/productes")
        .then(res => res.json())
        .then(data => setDisplayProducts(data)))
    },[])
    const handleClick=(item)=>{
        if(cartItem._id!==1) return;
        setCartItem(...cartItem, item)
    }
    const handleOnChange=(item, d)=>{
        const ind= cartItem.indexOf(item)
        const arr= cartItem;
        arr[ind].amount+=d;
        if(arr[ind].amount===0)arr[ind].amount=1
        setCartItem([...arr])
    };
    // useEffect(()=>{
    //     console.log("Cart Changed")
    // },[cartItem])
    return (
        <div>
           <Container>
           <Row xs={1} md={4} className="g-4">
            {
                displayProducts.slice(6,25).map(getSingleList=> <SingleDisplayProduct
                key={getSingleList._id}
                products={getSingleList}
                handleEvent={handleClick}
            
                ></SingleDisplayProduct> )
            }
    </Row>
    <ShopCart
        handleOnChange={handleOnChange}
    ></ShopCart>
    </Container>
        </div>
    );
};

export default DisplayProducts;