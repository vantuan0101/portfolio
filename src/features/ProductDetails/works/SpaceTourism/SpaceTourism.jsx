import React from 'react';
import NextPage from '../../NextPage/NextPage';
import style from './space.module.scss';
const SpaceTourism = () => {
    return (
        <>
            <section className={style.product}>
                <section className={style.show}>
                    <div className={style.items}>
                        <div className={style.items__img}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-f52e4.appspot.com/o/image%2Fproduct%2Fspace%2Fspace1.png?alt=media&token=fd0e4069-c41c-4f77-8c4c-ed833a8a078e" alt="" />
                        </div>
                        <div className={style.items__img}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-f52e4.appspot.com/o/image%2Fproduct%2Fspace%2Fspace2.png?alt=media&token=ceb2a74e-a8aa-4132-9966-9b0be6f95107" alt="" />
                        </div>
                    </div>
                    <div className={style.items}>
                        <div className={style.items__img}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-f52e4.appspot.com/o/image%2Fproduct%2Fspace%2Fspace3.png?alt=media&token=87a73b54-8183-47c9-9b34-4b45dba44282" alt="" />
                        </div>
                        <div className={style.items__img}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-f52e4.appspot.com/o/image%2Fproduct%2Fspace%2Fspace4.png?alt=media&token=366670a2-9933-4c8d-894e-4b7beec0d0a8" alt="" />
                        </div>
                    </div>
                </section>
            </section>
            <NextPage bgColor={'#DF7104'} nameNextProject={'Huddle Landing'} linkProject={'huddle-landing-page'} />
        </>
    );
};

export default SpaceTourism;
