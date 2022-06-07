import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/photo/logo.svg';
import styles from './header.module.scss';
const Header = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" className={styles.logo__img} />
                </div>

                <div className={styles.infor}>
                    <Link to="/info" className={styles.infor__link}>
                        Link Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
