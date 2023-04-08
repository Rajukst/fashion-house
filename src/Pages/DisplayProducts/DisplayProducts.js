import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import SingleDisplayProduct from './SingleDisplayProduct';

const DisplayProducts = () => {

    const [displayProducts, setDisplayProducts]= useState([])
    useEffect(()=>{
        fetch( fetch("https://fashion-house-server.vercel.app/products")
        .then(res => res.json())
        .then(data => setDisplayProducts(data)))
    },[])
 
    return (
        <div>
           <Container>
           <Row xs={1} md={4} className="g-4">
            {
                displayProducts.slice(6,25).map(getSingleList=> <SingleDisplayProduct
                key={getSingleList._id}
                products={getSingleList}
                ></SingleDisplayProduct> )
            }
    </Row>

    </Container>
        </div>
    );
};

export default DisplayProducts;