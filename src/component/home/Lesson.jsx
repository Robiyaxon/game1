import React from 'react'
import style from "./Lesson.module.css"
import img from "../../assert/kitob2.png"
import img2 from "../../assert/2.jpg"
import img3 from "../../assert/3.jpg"
import book from "../../assert/4.jpg"
import book2 from "../../assert/bb.pdf"
const Lesson = () => {
    return (
        <div className={style.wrapper} id='target-section'>

            <h1>Informatika fanidan darsliklar</h1>

            <div className={style.box}>
                <div className={style.box2}>
                    <img src={img2} alt="Kitob rasmi" />
                </div>

                {/* Onlayn ko‘rish */}
                <a
                    href={book2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.href}
                >
                    Onlayn ko‘rish
                </a>

                {/* Yuklab olish */}
                <a
                    href={book2}
                    download
                    className={style.href}
                >
                    Yuklab olish
                </a>
            </div>
            <div className={style.box}>
                <div className={style.box2}>
                    <img src={img} alt="Kitob rasmi" />
                </div>

                {/* Onlayn ko‘rish */}
                <a
                    href={book2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.href}
                >
                    Onlayn ko‘rish
                </a>

                {/* Yuklab olish */}
                <a
                    href={book2}
                    download
                    className={style.href}
                >
                    Yuklab olish
                </a>
            </div>
            <div className={style.box}>
                <div className={style.box2}>
                    <img src={img3} alt="Kitob rasmi" />
                </div>

                {/* Onlayn ko‘rish */}
                <a
                    href={book2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.href}
                >
                    Onlayn ko‘rish
                </a>

                {/* Yuklab olish */}
                <a
                    href={book2}
                    download
                    className={style.href}
                >
                    Yuklab olish
                </a>
            </div>
            <div className={style.box}>
                <div className={style.box2}>
                    <img src={img} alt="Kitob rasmi" />
                </div>

                {/* Onlayn ko‘rish */}
                <a
                    href={book2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.href}
                >
                    Onlayn ko‘rish
                </a>

                {/* Yuklab olish */}
                <a
                    href={book2}
                    download
                    className={style.href}
                >
                    Yuklab olish
                </a>
            </div>


        </div>
    )
}

export default Lesson