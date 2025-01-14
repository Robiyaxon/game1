import React from 'react'
import style from "./Lesson.module.css"
import img from "../../assert/kitob2.png"
const Lesson = () => {
    return (
        <div className={style.wrapper}>
            
            <h1>Informatika fanidan darsliklar</h1>

            <div className={style.box}>
                <div className={style.box2}>
                <img src={img} alt="" />
                </div>
                
                <a href="./" className={style.href}>Yuklab olish</a>
            </div>
            <div className={style.box}>
                <div className={style.box2}>
                <img src={img} alt="" />
                </div>
                
                <a href="./" className={style.href}>Yuklab olish</a>
            </div>
            <div className={style.box}>
                <div className={style.box2}>
                <img src={img} alt="" />
                </div>
                
                <a href="./" className={style.href}>Yuklab olish</a>
            </div>
            <div className={style.box}>
                <div className={style.box2}>
                <img src={img} alt="" />
                </div>
                
                <a href="./" className={style.href}>Yuklab olish</a>
            </div>


            </div>
    )
}

export default Lesson