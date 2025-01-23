import React from 'react'
import style from "./Lesson.module.css"
import img from "../../assert/kitob2.png"
import img2 from "../../assert/2.jpg"
import img3 from "../../assert/3.jpg"
import book from "../../assert/4.jpg"
import book2 from "../../assert/book2.pdf"
const Lesson = () => {
    return (
        <div className={style.wrapper} id='target-section'>
            
            <h1>Informatika fanidan darsliklar</h1>

            <div className={style.box}>
                <div className={style.box2}>
                <img src={img} alt="" />
                </div>
                
                <a href={book2} target="_blank"  rel="noopener noreferrer"  className={style.href}>Yuklab olish</a>
            </div>
            <div className={style.box}>
                <div className={style.box2}>
                <img src={img2} alt="" />
                </div>
                
                <a href={book2} target="_blank"  rel="noopener noreferrer"  className={style.href}>Yuklab olish</a>
            </div>
      
            <div className={style.box}>
                <div className={style.box2}>
                <img src={book} alt="" />
                </div>
                
                <a href={book} target="_blank"  rel="noopener noreferrer"  className={style.href}>Yuklab olish</a>
            </div>
            <div className={style.box}>
                <div className={style.box2}>
                <img src={img3} alt="" />
                </div>
                
                <a href={book2} target="_blank"  rel="noopener noreferrer"  className={style.href}>Yuklab olish</a>
            </div>


            </div>
    )
}

export default Lesson