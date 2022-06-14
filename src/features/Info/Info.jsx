import React from 'react';
import style from './info.module.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import avt from '../../assets/photo/avt.JPG';
import { Trans } from 'react-i18next';
const Info = () => {
    return (
        <div className={style.main}>
            <div className={style.contain}>
                <div className={style.avt}>
                    <img src={avt} alt="" />
                </div>
                <div className={style.text}>
                    <p>
                        <Trans>Hello! I’m</Trans> Van Tuan.
                    </p>
                    <p>
                        <Trans>
                            I work as the creative front-end developer. I'm ready to collaborate with new opportunities
                            and challenges as a freelancer for web design and development
                        </Trans>
                    </p>
                </div>
                <div className={style.idea}>
                    <p>
                        <Trans>Have an idea?</Trans>
                    </p>
                    <p>
                        <Trans>Let’s make something together!</Trans>
                    </p>
                </div>
                <div className={style.contact}>
                    <div>
                        <AiOutlineArrowRight />
                    </div>
                    <div>
                        <a href="mailto:huynhvantuan.work@gmail.com">huynhvantuan.work@gmail.com</a>
                        <a href="tel:+84339701312">0339701312</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
