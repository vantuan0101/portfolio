import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Intro from '../Intro/Intro';
import ProductList from '../ProductList/ProductList';

const Home = () => {
    
    return (
        <>
            <Header />
            <Intro />
            <ProductList  />
        </>
    );
};

export default Home;
