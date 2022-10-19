import React from 'react';
import HomeProducts from '../HomeProducts/HomeProducts';
import PartnerGallery from '../PartnerGallery/PartnerGallery';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <h1>This is Home</h1>
            <HomeProducts></HomeProducts>
            <Products></Products>
            <PartnerGallery></PartnerGallery>
        </div>
    );
};

export default Home;