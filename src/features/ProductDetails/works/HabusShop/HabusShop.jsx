import clsx from 'clsx';
import React from 'react';
import NextPage from '../../NextPage/NextPage';
import style from './habus.module.scss';
const HabusShop = () => {
    return (
        <>
            <section className={style.product}>
                <section className={style.show}>
                    <div className={style.items}>
                        <div className={style.items__img}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/portfolio-f52e4.appspot.com/o/image%2Fproduct%2Fhabusshop%2Fhabusshop1.png?alt=media&token=36657bd7-b91d-45f3-8437-397c97440f89"
                                alt=""
                            />
                        </div>
                        <div className={style.items__img}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/portfolio-f52e4.appspot.com/o/image%2Fproduct%2Fhabusshop%2Fhabusshop2.png?alt=media&token=cf51ecc7-1df4-488c-946c-2572a080db61"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className={clsx(style.items2)}>
                        <div className={style.items__img}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/portfolio-f52e4.appspot.com/o/image%2Fproduct%2Fhabusshop%2Fhabusshop3.png?alt=media&token=952237bc-9d9b-4eb8-8c1f-909362cc6826"
                                alt=""
                            />
                        </div>
                        <div className={style.items__img}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/portfolio-f52e4.appspot.com/o/image%2Fproduct%2Fhabusshop%2Fhabusshop4.png?alt=media&token=255090d0-9f87-407e-9e6c-8c619759af7f"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
            </section>
            <NextPage bgColor={'#640000'} nameNextProject={'Job Listing'} linkProject={'job-listing'} />
        </>
    );
};

export default HabusShop;
