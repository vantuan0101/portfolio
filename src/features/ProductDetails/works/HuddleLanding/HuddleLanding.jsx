import React from 'react'
import style from './huddle.module.scss';
import clsx from 'clsx';
const HuddleLanding = () => {
  return (
    <section className={style.product}>
            <section className={style.show}>
                <div className={style.items}>
                    <div className={style.items__img}>
                        <img src="https://i.ibb.co/3BcYpF1/huddle1.png" alt="" />
                    </div>
                    <div className={style.items__img}>
                        <img src="https://i.ibb.co/RHKV2r0/huddle2.png" alt="" />
                    </div>
                </div>
                
            </section>
        </section>
  )
}

export default HuddleLanding

