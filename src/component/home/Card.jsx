import React from 'react';
import style from './Card.module.css';
import shablon from "../../assert/shablon.png"
import img1 from "../../assert/airplay_ghost.png"
import img2 from "../../assert/book.png"
import img3 from "../../assert/calendar2-check.png"
const Card = () => {
    return (
      <div className={style.wrapper}>
        <div className={style.card}>
          <img src={shablon} alt="" />
          <img src={img1} alt="" className={style['inner-image']} />
          <div className={style.content}>
            <p>Video darsliklar</p>
          </div>
        </div>
        <div className={style.card}>
          <img src={shablon} alt="" />
          <img src={img2} alt="" className={style['inner-image']} />
          <div className={style.content}>
            <p>Kitoblar</p>
          </div>
        </div>
        <div className={style.card}>
          <img src={shablon} alt="" />
          <img src={img3} alt="" className={style['inner-image']} />
          <div className={style.content}>
            <p>Testlar</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;