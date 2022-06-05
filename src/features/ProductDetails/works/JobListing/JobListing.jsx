import React from 'react'
import style from './job.module.scss';
import clsx from 'clsx';
const JobListing = () => {
  return (
    <section className={style.product}>
            <section className={style.show}>
                <div className={style.items}>
                    <div className={style.items__img}>
                        <img src="https://i.ibb.co/FsX0kG3/joblisting1.png" alt="" />
                    </div>
                    <div className={style.items__img}>
                        <img src="https://i.ibb.co/K62tm9s/habusshop2.png" alt="" />
                    </div>
                </div>
            </section>
        </section>
  )
}

export default JobListing