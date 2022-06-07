import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import data from '../../../product.json';
import style from './details.module.scss';
const ProductDetails = ({ indexProduct }) => {
    const mainColor = ['#640000', '#222222', '#DF7104', '#734DBB', '#03397F'];
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const time = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => {
            clearTimeout(time);
        };
    }, []);
    window.scrollTo(0, 0);
    // console.log(indexProduct);
    return (
        <>
            {loading ? (
                <Loading bgColor={mainColor[indexProduct - 1]} />
            ) : (
                <>
                    {data.map((item, idx) =>
                        item.id === indexProduct ? (
                            <div className={style.contain} key={item.id}>
                                <section className={style.header} style={{ backgroundColor: mainColor[idx] }}>
                                    <div>
                                        <p>Showcase</p>
                                        <h2>{item.name}</h2>
                                    </div>

                                    <div className={style.video}>
                                        <video
                                            src={item.videoDemo}
                                            preload="auto"
                                            autoPlay={true}
                                            controls={true}
                                            loop=""
                                            playsInline=""
                                            webkit-playsinline=""
                                            x5-playsinline=""
                                            style={{ width: '100%', height: '100%' }}
                                        ></video>
                                    </div>
                                </section>
                                <section className={style.intro}>
                                    <div className={style.about}>
                                        <div className={style.about__tools}>
                                            <div className={style.tools}>
                                                <label>Font-end</label>
                                                <p>{item.frontend}</p>
                                            </div>
                                            <div className={style.tools}>
                                                <label>Back-end</label>
                                                <p>{item.backend}</p>
                                            </div>
                                            <div className={style.tools}>
                                                <label>Design</label>
                                                <p>{item.design}</p>
                                            </div>
                                            <div className={style.tools}>
                                                <label>Year</label>
                                                <p>{item.year}</p>
                                            </div>
                                        </div>
                                        <div className={style.about__link}>
                                            <a target="_blank" href={item.linkDemo}>
                                                Visit Website
                                                <AiOutlineArrowRight />
                                            </a>
                                        </div>
                                    </div>

                                    <Outlet />
                                </section>
                            </div>
                        ) : (
                            ''
                        ),
                    )}
                </>
            )}
        </>
    );
};

export default ProductDetails;
