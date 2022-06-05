import React from 'react'
import style from './dropdown.module.scss';
import clsx from 'clsx';
const DropdownNav = () => {
  return (
    <section className={style.product}>
            <section className={style.show}>
                <div className={style.items}>
                    <div className={style.items__img}>
                        <img src="https://i.ibb.co/FJ3F3F4/dropdown1.png" alt="" />
                    </div>
                    <div className={style.items__img}>
                        <img src="https://i.ibb.co/Qv8r6h2/dropdown2.png" alt="" />
                    </div>
                </div>
                <div className={style.items}>
                    <div className={style.items__img}>
                        <img src="https://i.ibb.co/RH46MrX/dropdown3.png" alt="" />
                    </div>
                </div>
                
            </section>
        </section>
  )
}



export default DropdownNav
