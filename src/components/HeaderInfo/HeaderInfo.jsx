import React from 'react'
import styles from './layout.module.scss'
import logo from '../../assets/photo/logo.svg'
import { Link } from 'react-router-dom'
const HeaderInfo = () => {
  return (
    <div className={styles.main}>
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src={logo} alt="logo" className={styles.logo__img} />
        </div>

        <div className={styles.infor}>
            <Link to="/" className={styles.infor__link}>
                Close
            </Link>
        </div>
    </div>
</div>
  )
}

export default HeaderInfo
