import React from 'react'
import style from "./Lesson.module.css"
import img from "../../assert/kitob2.png"
import book from "../../assert/book.pdf"
import book2 from "../../assert/book2.pdf"
const Lesson = () => {
    return (
        <div className={style.wrapper} id='target-section'>
            
            <h1>Informatika fanidan darsliklar</h1>

            <div className={style.box}>
                <div className={style.box2}>
                <img src={img} alt="" />
                </div>
                
                <a href={book2} target="_blank" className={style.href}>Yuklab olish</a>
            </div>
            <div className={style.box}>
                <div className={style.box2}>
                <img src={img} alt="" />
                </div>
                <a href={book} target="_blank" className={style.href} download>Yuklab olish</a>
            </div>
            <div className={style.box}>
                <div className={style.box2}>
                <img src={img} alt="" />
                </div>
                
                <a href={book} target="_blank" className={style.href}>Yuklab olish</a>
            </div>
            <div className={style.box}>
                <div className={style.box2}>
                <img src={img} alt="" />
                </div>
                
                <a href={book2} target="_blank" className={style.href}>Yuklab olish</a>
            </div>


            </div>
    )
}

export default Lesson