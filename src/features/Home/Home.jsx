import React, { useState } from 'react';
import Intro from '../Intro/Intro';
import ProductList from '../ProductList/ProductList';

const Home = ({statusHeader}) => {
    
    return (
        <>
            <Intro />
            <ProductList statusHeader={statusHeader} />
        </>
    );
};

export default Home;
