import React from 'react';
import Header from '../../components/Header/Header';
import Intro from '../Intro/Intro';
import ProductList from '../ProductList/ProductList';
import Contact from '../Contact/Contact'
const Home = () => {
    return (
        <>
            <Header  />
            <Intro />
            <ProductList  />
            <Contact />
        </>
    );
};

export default Home;
