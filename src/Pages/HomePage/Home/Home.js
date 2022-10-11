import React from 'react';
import InstaGallery from '../InstaGallery/InstaGallery';
import PartnerGallery from '../PartnerGallery/PartnerGallery';

const Home = () => {
    return (
        <div>
            <h1>This is Home</h1>
            <InstaGallery></InstaGallery>
            <PartnerGallery></PartnerGallery>
        </div>
    );
};

export default Home;