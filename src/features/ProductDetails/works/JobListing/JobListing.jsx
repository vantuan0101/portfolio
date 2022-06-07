import React from 'react';
import NextPage from '../../NextPage/NextPage';
import style from './job.module.scss';

const JobListing = () => {
    return (
        <>
            <section className={style.product}>
                <section className={style.show}>
                    <div className={style.items}>
                        <div className={style.items__img}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-f52e4.appspot.com/o/image%2Fproduct%2Fjoblist%2Fjoblisting1.png?alt=media&token=a387a32e-17e0-47bd-9396-0d1445778a54" alt="" />
                        </div>
                        <div className={style.items__img}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-f52e4.appspot.com/o/image%2Fproduct%2Fjoblist%2Fjoblisting2.png?alt=media&token=b087637a-6920-40ed-83e3-cc7ef4dcf56e" alt="" />
                        </div>
                    </div>
                </section>
            </section>
            <NextPage bgColor={'#222222'} nameNextProject={'Space Tourism'} linkProject={'space-tourism'} />
        </>
    );
};

export default JobListing;
