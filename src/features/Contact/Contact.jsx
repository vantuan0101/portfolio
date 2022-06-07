import React from 'react';
import style from './contact.module.scss';
const Contact = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.info}>
                    <h3>Let’s make something together!</h3>
                    <a className={style.info__mail} href="mailto:huynhvantuan.work@gmail.com">
                        huynhvantuan.work@gmail.com
                    </a>
                    <a className={style.info__tel} href="tel:+84339701312">
                        0339701312
                    </a>
                    <div>Van Tuan</div>
                </div>

                <div className={style.copy}>
                    <h5>Designed by Nghia Tran &amp; Developed by Văn Tuấn</h5>
                    <h5>All rights reserved 2022</h5>
                </div>
            </div>
        </div>
    );
};

export default Contact;
