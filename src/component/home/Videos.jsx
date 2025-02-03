import React from 'react'
import { Link } from 'react-router-dom'; // react-router-dom import qilish
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
                    <Link to="/home/video/1">  {/* video bo'yicha yo'naltirish */}
                        <img src={img1} alt="" />
                        <p>1-dars Sezish o'rganlari</p>
                        <h4>2 daqiqa</h4>
                    </Link>
                </div>
                <div className={style.box}>
                    <Link to="/home/video/2">
                        <img src={img2} alt="" />
                        <p>2-dars Hid bilish</p>
                        <h4>2:13 daqiqa</h4>
                    </Link>
                </div>
                <div className={style.box}>
                    <Link to="/home/video/3">
                        <img src={img3} alt="" />
                        <p>3-dars Tam bilish</p>
                        <h4>2:16 daqiqa</h4>
                    </Link>
                </div>
                <div className={style.box}>
                    <Link to="/home/video/4">
                        <img src={img3} alt="" />
                        <p>4-dars Ko`rish</p>
                        <h4>2:40 daqiqa</h4>
                    </Link>
                </div>
                <div className={style.box}>
                    <Link to="/home/video/5">
                        <img src={img3} alt="" />
                        <p>5-dars Eshitish</p>
                        <h4>2:40 daqiqa</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Videos;
