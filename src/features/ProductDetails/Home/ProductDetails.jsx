import React from 'react';
import style from './details.module.scss';
import { Outlet, useParams } from 'react-router-dom';
import data from '../../../product.json';
import { AiOutlineArrowRight } from 'react-icons/ai';
const ProductDetails = () => {
    let params = useParams()
    // console.log(params.Name);
    const product = data.find((item) => item.route === params.Name);
    // console.log(product);
    return (
        <div className={style.contain}>
            <section className={style.header}>
                <div>
                    <p>Showcase</p>
                    <h2>{product.name}</h2>
                </div>

                <div className={style.video}>
                    {/* <div> */}
                    <video
                        src="https://www.nghiatran.info/projects/stylepnj/video.mov"
                        preload="auto"
                        autoPlay={true}
                        controls=""
                        loop=""
                        playsInline=""
                        webkit-playsinline=""
                        x5-playsinline=""
                        style={{ width: '100%', height: '100%' }}
                    ></video>
                    {/* </div> */}
                </div>
            </section>
            <section className={style.intro}>
                <div className={style.about}>
                    <div className={style.about__tools}>
                        <div className={style.tools}>
                            <label>Font-end</label>
                            <p>{product.frontend}</p>
                        </div>
                        <div className={style.tools}>
                            <label>Back-end</label>
                            <p>{product.backend}</p>
                        </div>
                        <div className={style.tools}>
                            <label>Design</label>
                            <p>{product.design}</p>
                        </div>
                        <div className={style.tools}>
                            <label>Year</label>
                            <p>{product.year}</p>
                        </div>
                    </div>
                    <div className={style.about__link}>
                        <a target="_blank" href="https://ui8-unity.herokuapp.com/index.html">
                            Visit Website
                            <AiOutlineArrowRight />
                        </a>
                    </div>
                </div>
                <section className={style.product}>
                    <Outlet />
                </section>
            </section>
        </div>
    );
};

export default ProductDetails;
