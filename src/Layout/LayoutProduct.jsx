import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderProduct from '../components/HeaderProduct/HeaderProduct';

const LayoutProduct = () => {
    return (
        <>
            <HeaderProduct />
            <Outlet />
        </>
    );
};

export default LayoutProduct;
