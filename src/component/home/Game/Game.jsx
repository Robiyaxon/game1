import React from 'react'
import style from "./Game.module.css"
import { NavLink } from 'react-router-dom'
import img1 from "../../../assert/game1.png"
import img2 from "../../../assert/game2.png"
import img3 from "../../../assert/game3.png"
import img4 from "../../../assert/game4.png"
const Game = () => {
    return (
        <div className={style.wrapper}>
            <NavLink to={"/"} className={style.click}>
                <img src={img1} alt="" />
                <p>Game 1</p>
            </NavLink>
            <NavLink to={"/"} className={style.click}>
                <img src={img2} alt="" />
                <p>Game 2</p>
            </NavLink>
            <NavLink to={"/"} className={style.click}>
                <img src={img3} alt="" />
                <p>Game 3</p>
            </NavLink>
            <NavLink to={"/"} className={style.click}>
                <img src={img4} alt="" />
                <p>Game 4</p>
            </NavLink>
        </div>
    )
}

export default Game