import clsx from 'clsx';
import React, { createContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import data from '../../product.json';
import style from './product.module.scss';
const ProductList = ({statusHeader}) => {
    
    return (
        <ParallaxProvider>
            <div className={style.wrap}>
                {data.map((item) => (
                    <div className={style.product} key={item.id}>
                        <Link to={`project/${item.route}`} className={clsx(style.items, item.id % 2 === 0 ? style.grid__right : '')}
                        onClick={statusHeader}
                        >
                            <Parallax
                                className={clsx(style.name, item.id % 2 === 0 ? style.text__right : '')}
                                speed={10}
                                translateY={[15, 100]}
                            >
                                {item.name}
                            </Parallax>
                            <ParallaxBanner
                                className={clsx(style.image)}
                                layers={[
                                    {
                                        children: <img className={style.image} src={item.image} alt={item.name} />,
                                        speed: -10,
                                    },
                                ]}
                                style={{ aspectRatio: '2 / 1', mixBlendMode: 'difference', height: '500px' }}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </ParallaxProvider>

    );
};

export default ProductList;
