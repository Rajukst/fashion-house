import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeProductList from './HomeProductList';

const HomeProducts = () => {
    const [allProducts, setAllProducts]= useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/productes")
        .then(res=>res.json())
        .then(data=>setAllProducts(data))
    },[])
    return (
        <div>
            <h1>This is Home Products</h1>
            <Container>
      <Row xs={12} md={4} lg={4}>
        {
            allProducts.map(gettingProducts=> <HomeProductList
            key={gettingProducts._id}
            allproduct={gettingProducts}
            ></HomeProductList> )
        }
      </Row>
    </Container>
        </div>
    );
};

export default HomeProducts;