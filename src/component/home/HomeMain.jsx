import React from 'react'
import style from "./HomeMain.module.css"
import img from "../../assert/boys.png"
import { NavLink } from 'react-router-dom'
const HomeMain = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.block1}>
                <div className={style.starts}>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span>&#11088;</span>
                    <span className={style.line}> | </span>
                    <p>Bilim eshiklarini kichik qo'llar uchun ochamiz</p>
                    <div className={style.info}>
                        <h2>Informatika fanidan boshlang'ich sinf o'quvchilari uchun onlayn platforma</h2>
                        <h1>Bolalar quvonchni ko'rishadi.
                        Siz esa haqiqiy ta'lim natijalarini.
                        </h1>
                        <h2>informatika fanini onlayn tarzda videodarsliklar orqali oson o'rganadi</h2>
                    </div>
                    <div className={style.navlink}>
                        <NavLink className={style.nav1} to={""}>O'qituvchilar uchun</NavLink>
                        <NavLink className={style.nav2} to={""}>Ota-onalar uchun</NavLink>
                    </div>
                </div>
            </div>
            <div className={style.block2}>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default HomeMain