import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import ProductsList from './ProductsList';

const Products = () => {
    const [productes, setProductes]= useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/productes")
        .then(res=>res.json())
        .then(data=>setProductes(data))
    },[])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
      };
    return (
        <Container>
      <Row className="g-4">
     <h5>Trending Products</h5>
        <Slider {...settings}>
      {
        productes.slice(7,16).map(allProductses=> <ProductsList
        key={allProductses._id}
        allProducts={allProductses}
        ></ProductsList> )
      } 
        </Slider>
      </Row>
    </Container>
    );
};

export default Products;