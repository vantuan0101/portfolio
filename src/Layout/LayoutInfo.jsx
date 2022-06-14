import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderInfo from '../components/HeaderInfo/HeaderInfo';

const LayoutInfo = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <HeaderInfo />
            <Outlet />
        </div>
    );
};

export default LayoutInfo;
