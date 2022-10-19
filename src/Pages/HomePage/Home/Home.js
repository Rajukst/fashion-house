import React from 'react';
import InstaGallery from '../InstaGallery/InstaGallery';
import PartnerGallery from '../PartnerGallery/PartnerGallery';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <h1>This is Home</h1>
            <Products></Products>
            <InstaGallery></InstaGallery>
            <PartnerGallery></PartnerGallery>
        </div>
    );
};

export default Home;