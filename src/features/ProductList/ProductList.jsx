import clsx from 'clsx';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import data from '../../product.json';
import style from './product.module.scss';
const ProductList = () => {

    let navigate = useNavigate();
    const handleClickProduct  = (item)=>{
        navigate(`project/${item.route}`)
    }
    // window.requestAnimationFrame(ProductList)
    return (
        <ParallaxProvider>
            <div className={style.wrap}>
                {data.map((item) => (
                    <div
                        className={clsx(style.product, item.id % 2 === 0 ? style.product__right : style.product__left)}
                        key={item.id}
                    >
                        <div
                            // to={`project/${item.route}`}
                            className={clsx(style.items, item.id % 2 === 0 ? style.grid__right : '')}
                            onClick={()=>handleClickProduct(item)}
                        >
                            <Parallax
                                className={clsx(style.name, item.id % 2 === 0 ? style.text__right : '')}
                                speed={10}
                                translateY={[15, 100]}
                            >
                                {item.name}
                            </Parallax>
                            <ParallaxBanner
                                className={clsx(style.image, 'aspect-[2/1]')}
                                layers={[{ image: `${item.image}`, speed: -15 }]}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </ParallaxProvider>
    );
};

export default ProductList;
