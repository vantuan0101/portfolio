import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/photo/logo.svg';
import styles from './header.module.scss';
import { useTranslation, Trans } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'
import {english , china  , japan , korea} from './headerSlice'
const Header = () => {
    // const { t, i18n } = useTranslation();
    // const [lng, setLng] = useState('en');
    // useEffect(() => {
    //     i18n.changeLanguage(lng);
    // }, [lng]);

    const dispatch = useDispatch()
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" className={styles.logo__img} />
                </div>

                <div className={styles.infor}>
                    <Link to="/info" className={styles.infor__link}>
                        <Trans>Link Profile</Trans>
                    </Link>
                    <div className={styles.lang}>
                        <Trans>Change Language</Trans>
                        <div>
                            <ul className={styles.lang__list}>
                                <li onClick={() => dispatch(english())} >
                                    <Trans>English</Trans>
                                </li>
                                <li onClick={() => dispatch(china())} >
                                    <Trans>China</Trans>
                                </li>
                                <li onClick={() => dispatch(japan())} >
                                    <Trans>Japan</Trans>
                                </li>
                                <li onClick={() => dispatch(korea())} >
                                    <Trans>Korea</Trans>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
