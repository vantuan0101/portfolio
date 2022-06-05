import clsx from 'clsx';
import React from 'react';
import styles from './header.module.scss';
import logo from '../../assets/photo/logo.svg';
import { Link } from 'react-router-dom';
const HeaderProduct = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Link to="/" className={styles.hasback} >
                    <svg
                        width="14"
                        height="10"
                        aria-hidden="true"
                        focusable="false"
                        className="svg-inline--fa fa-arrow-left fa-w-14"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="#ffffff"
                            d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
                        ></path>
                    </svg>
                    <span>Back</span>
                </Link>
                <div className={styles.infor}>
                    <a href="#" className={styles.infor__link}>
                        Link Profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeaderProduct;
