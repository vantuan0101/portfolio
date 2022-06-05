import React from 'react';
import clsx from 'clsx';
import style from './intro.module.scss';
import avt from '../../assets/photo/avt.JPG';
const Intro = () => {
    return (
        <>
            <div className={clsx(style.wrap)}>
                <p className={clsx(style.wrap_text)}>
                    One may say
                    <span className={clsx(style.special__text)}> the eternal mystery </span>
                    of the world is its
                    <span className={clsx(style.special__text)}> comprehensibility.</span>
                    <br />
                    The eye sees only what the mind is
                    <span className={clsx(style.special__text)}> prepared to comprehend.</span>
                </p>
            </div>
            <div className={clsx(style.infor)}>
                <div className={clsx(style.avt)}>
                    <img src={avt} alt="avatar" />
                </div>
                <div className={clsx(style.about)}>
                    <div >Huỳnh Văn Tuấn</div>
                    <div>Don’t cry over the past, it’s gone.</div>
                    <div>Don’t stress about the future, it hasn’t arrived.</div>
                    <div>Live in the present and make it beautiful.</div>
                </div>
            </div>
        </>
    );
};

export default Intro;
