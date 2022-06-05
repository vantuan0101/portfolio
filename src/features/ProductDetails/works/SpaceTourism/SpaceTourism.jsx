import React from 'react'
import style from './space.module.scss';
import clsx from 'clsx';
const SpaceTourism = () => {
  return (
    <section className={style.product}>
            <section className={style.show}>
                <div className={style.items}>
                    <div className={style.items__img}>
                        <img src="https://i.ibb.co/CsjtYNJ/space1.png" alt="" />
                    </div>
                    <div className={style.items__img}>
                        <img src="https://i.ibb.co/mR9BHZ9/space2.png" alt="" />
                    </div>
                </div>
                <div className={style.items}>
                    <div className={style.items__img}>
                        <img src="https://i.ibb.co/0rddVpd/space3.png" alt="" />
                    </div>
                    <div className={style.items__img}>
                        <img src="https://i.ibb.co/TTG9yBq/space4.png" alt="" />
                    </div>
                </div>
            </section>
        </section>
  )
}

export default SpaceTourism
