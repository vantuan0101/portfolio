import React from 'react';
import clsx from 'clsx';
import style from './intro.module.scss';
import avt from '../../assets/photo/avt.JPG';
import {Trans } from 'react-i18next';

const Intro = () => {

    return (
        <>
            <div className={clsx(style.wrap)}>
                <p className={clsx(style.wrap_text)}>
                    <Trans>One may say</Trans>
                    <span className={clsx(style.special__text)}><Trans> the eternal mystery</Trans> </span>
                     <Trans>of the world is its</Trans>
                    <span className={clsx(style.special__text)}><Trans> comprehensibility.</Trans> </span>
                    <br />
                    <Trans>The eye sees only what the mind is</Trans>
                    <span className={clsx(style.special__text)}> <Trans> prepared to comprehend.</Trans></span>
                </p>
            </div>
            <div className={clsx(style.infor)}>
                <div className={clsx(style.avt)}>
                    <img src={avt} alt="avatar" />
                </div>
                <div className={clsx(style.about)}>
                    <div>Huỳnh Văn Tuấn</div>
                    <div><Trans>Don’t cry over the past, it’s gone.</Trans></div>
                    <div><Trans>Don’t stress about the future, it hasn’t arrived.</Trans></div>
                    <div><Trans>Live in the present and make it beautiful.</Trans></div>
                </div>
            </div>
        </>
    );
};

export default Intro;
