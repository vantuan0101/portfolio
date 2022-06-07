import React from 'react'
import style from './info.module.scss';
import { AiOutlineArrowRight } from "react-icons/ai";
import avt from '../../assets/photo/avt.JPG'
const Info = () => {
  return (
    <div className={style.main}> 
      <div className={style.contain}>
          <div className={style.avt}>
              <img src={avt} alt="" />
          </div>
          <div className={style.text}>
              <p>Hello! I’m Van Tuan.</p>
              <p>I work as the creative front-end developer. I'm ready to collaborate with new opportunities and challenges as a freelancer for web design and development</p>
          </div>
          <div className={style.idea}>
              <p>Have an idea?</p>
              <p>Let's make something together</p>
          </div>
          <div className={style.contact}>
              <div><AiOutlineArrowRight /></div>
              <div>
                  <a href="mailto:huynhvantuan.work@gmail.com">huynhvantuan.work@gmail.com</a>
                  <a href="tel:+84339701312">0339701312</a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Info
