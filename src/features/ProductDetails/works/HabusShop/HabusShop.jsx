import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import NextPage from '../../NextPage/NextPage';
import style from './habus.module.scss';
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
const HabusShop = () => {
    return (
        <>
            <ParallaxProvider>
                <section className={style.product}>
                    <section className={style.show}>
                        <div className={style.items}>
                            
                            <div className={style.items__img}>
                                <img src="https://i.ibb.co/Q9kCn94/habusshop1.png" alt="" />
                            </div>
                            <div className={style.items__img}>
                                <img src="https://i.ibb.co/K62tm9s/habusshop2.png" alt="" />
                            </div>
                        </div>

                        <div className={clsx(style.items2)}>
                            <div className={style.items__img}>
                                <img src="https://i.ibb.co/4Mwy9hs/habusshop3.png" alt="" />
                            </div>
                            <div className={style.items__img}>
                                <img src="https://i.ibb.co/6gk5hSV/habusshop4.png" alt="" />
                            </div>
                        </div>
                    </section>
                </section>
                <NextPage bgColor={'#640000'} nameNextProject={'Job Listing'} linkProject={'job-listing'} />
            </ParallaxProvider>
        </>
    );
};

export default HabusShop;
