import React from 'react';
import NextPage from '../../NextPage/NextPage';
import style from './huddle.module.scss';
const HuddleLanding = () => {
    return (
        <>
            <section className={style.product}>
                <section className={style.show}>
                    <div className={style.items}>
                        <div className={style.items__img}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-f52e4.appspot.com/o/image%2Fproduct%2Fhuddle%2Fhuddle1.png?alt=media&token=d560419e-0ec6-4442-b3b5-07f19308ccdc" alt="" />
                        </div>
                        <div className={style.items__img}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-f52e4.appspot.com/o/image%2Fproduct%2Fhuddle%2Fhuddle2.png?alt=media&token=0e2d3119-b839-4230-ae22-68746190d02f" alt="" />
                        </div>
                    </div>
                </section>
            </section>
            <NextPage bgColor={'#734DBB'} nameNextProject={'Dropdown Nav'} linkProject={'dropdown-navigation'} />
        </>
    );
};

export default HuddleLanding;
