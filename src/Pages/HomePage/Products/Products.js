import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import Cart from './Cart';
import ProductsList from './ProductsList';

const Products = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
      fetch("http://localhost:5000/productes")
          .then(res => res.json())
          .then(data => setProduct(data))
  }, [])

  // declaring another useState for Product Component
  const [handleCart, setHandleCart] = useState([])

  // creating new array using spreed operator
  const eventHandle = (productItem) => {
      const cartProduct = [...handleCart, productItem];
      setHandleCart(cartProduct);
  }
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
        product.map(getProduct=> <ProductsList
        key={getProduct._id}
        products={getProduct}
        addCart={eventHandle}
  
        ></ProductsList> )
      } 
        </Slider>
      </Row>
    <Cart getCart={handleCart}></Cart>
    </Container>
    );
};

export default Products;