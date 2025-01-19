import React from 'react'
import style from "./Videos.module.css"
import img1 from "../../assert/aaa.png"
import img2 from "../../assert/cc.png"
import img3 from "../../assert/gg.png"
const Videos = () => {
    return (
        <div className={style.wrapper} id='target-section1'>
            <h1>Informatika fanidan videodarsliklar</h1>
            <div className={style.block}>
                <div className={style.box}>
                    <a href="https://www.youtube.com/watch?v=-2caC-uI7l4" target="_blank" rel="noopener noreferrer">
                        <img src={img1} alt="" />
                        <p>1-dars Sezish o'rganlari</p>
                        <h4>18:30 daqiqa</h4>
                    </a>

                </div>
                <div className={style.box}>
                    <a href="https://www.youtube.com/watch?v=-2caC-uI7l4" target="_blank" rel="noopener noreferrer">
                        <img src={img2} alt="" />
                        <p>2-dars Sezish o'rganlari</p>
                        <h4>18:30 daqiqa</h4>
                    </a>

                </div>
                <div className={style.box}>
                    <a href="https://www.youtube.com/watch?v=-2caC-uI7l4" target="_blank" rel="noopener noreferrer">
                        <img src={img3} alt="" />
                        <p>3-dars Sezish o'rganlari</p>
                        <h4>18:30 daqiqa</h4>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Videos