import React from 'react';
import style from './dropdown.module.scss';
const DropdownNav = () => {
  return (
    <section className={style.product}>
            <section className={style.show}>
                <div className={style.items}>
                    <div className={style.items__img}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-f52e4.appspot.com/o/image%2Fproduct%2Fdropdown%2Fdropdown1.png?alt=media&token=a59b82aa-c45b-45ec-af9b-94b0f7c819c2" alt="" />
                    </div>
                    <div className={style.items__img}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-f52e4.appspot.com/o/image%2Fproduct%2Fdropdown%2Fdropdown2.png?alt=media&token=baa97c75-7935-4949-b346-7dc7a90b9f8b" alt="" />
                    </div>
                </div>
                <div className={style.items}>
                    <div className={style.items__img}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-f52e4.appspot.com/o/image%2Fproduct%2Fdropdown%2Fdropdown3.png?alt=media&token=0a672f63-bce9-44e1-9416-2111f7a9c2e2" alt="" />
                    </div>
                </div>
                
            </section>
        </section>
  )
}



export default DropdownNav
