import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderProduct from '../components/HeaderProduct/HeaderProduct';

const LayoutProduct = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <HeaderProduct />
            <Outlet />
        </>
    );
};

export default LayoutProduct;
