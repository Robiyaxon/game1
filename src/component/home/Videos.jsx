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
                    <a href="https://youtu.be/wJECu_mPBEk" target="_blank" rel="noopener noreferrer">
                        <img src={img1} alt="" />
                        <p>1-dars Sezish o'rganlari</p>
                        <h4>2 daqiqa</h4>
                    </a>

                </div>
                <div className={style.box}>
                    <a href="https://youtu.be/uspeilWB7o0" target="_blank" rel="noopener noreferrer">
                        <img src={img2} alt="" />
                        <p>2-dars Hid bilish </p>
                        <h4>2:13 daqiqa</h4>
                    </a>

                </div>
                <div className={style.box}>
                    <a href="https://youtu.be/j_YLc1P7DDc" target="_blank" rel="noopener noreferrer">
                        <img src={img3} alt="" />
                        <p>3-dars Tam bilish</p>
                        <h4>2:16 daqiqa</h4>
                    </a>

                </div>
                <div className={style.box}>
                    <a href="https://youtu.be/2GUD_dsMUF8" target="_blank" rel="noopener noreferrer">
                        <img src={img3} alt="" />
                        <p>4-dars Ko`rish</p>
                        <h4>2:40 daqiqa</h4>
                    </a>

                </div>
                <div className={style.box}>
                    <a href="https://youtu.be/m6UsBR4xOHU" target="_blank" rel="noopener noreferrer">
                        <img src={img3} alt="" />
                        <p>5-dars Eshitish</p>
                        <h4>2:40 daqiqa</h4>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Videos