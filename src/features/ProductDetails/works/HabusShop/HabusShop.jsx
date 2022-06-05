import React from 'react';
import style from './habus.module.scss';
import clsx from 'clsx';
import NextPage from '../../NextPage/NextPage';
const HabusShop = () => {
    return (
        <>
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
        </>
    );
};

export default HabusShop;
