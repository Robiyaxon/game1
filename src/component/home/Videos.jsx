import React from 'react';
import style from "./Videos.module.css";
import img1 from "../../assert/aaa.png";
import img2 from "../../assert/cc.png";
import img3 from "../../assert/gg.png";

const Videos = () => {
    return (
        <div className={style.wrapper} id='target-section1'>
            <h1>Informatika fanidan videodarsliklar</h1>
            <div className={style.block}>
                <div className={style.box}>
                    <a href="https://game1-pearl.vercel.app/static/media/aaa.de1cfe607d38de327183.png" target="_blank" rel="noopener noreferrer">
                        <img src={img1} alt="1-dars" />
                        <p>1-dars Sezgi o‘rganlari</p>
                        <h4>2 daqiqa</h4>
                    </a>
                </div>
                <div className={style.box}>
                    <a href="https://game1-pearl.vercel.app/home/video/4" target="_blank" rel="noopener noreferrer">
                        <img src={img2} alt="2-dars" />
                        <p>2-dars Biz nimani ko‘ramiz?</p>
                        <h4>2:40 daqiqa</h4>
                    </a>
                </div>
                <div className={style.box}>
                    <a href="https://youtu.be/bEDlvOtHNRg" target="_blank" rel="noopener noreferrer">
                        <img src={img3} alt="3-dars" />
                        <p>3-dars Biz olamni qanday qabul qilamiz</p>
                        <h4>3:20 daqiqa</h4>
                    </a>
                </div>
                <div className={style.box}>
                    <a href="https://game1-pearl.vercel.app/home/video/5" target="_blank" rel="noopener noreferrer">
                        <img src={img3} alt="4-dars" />
                        <p>4-dars Biz nimani eshitamiz?</p>
                        <h4>2:40 daqiqa</h4>
                    </a>
                </div>
                <div className={style.box}>
                    <a href="https://game1-pearl.vercel.app/home/video/2" target="_blank" rel="noopener noreferrer">
                        <img src={img2} alt="5-dars" />
                        <p>5-dars Hid bilish</p>
                        <h4>2:13 daqiqa</h4>
                    </a>
                </div>
                <div className={style.box}>
                    <a href="https://game1-pearl.vercel.app/home/video/3" target="_blank" rel="noopener noreferrer">
                        <img src={img3} alt="6-dars" />
                        <p>6-dars Ta’m sezish</p>
                        <h4>2:16 daqiqa</h4>
                    </a>
                </div>
                <div className={style.box}>
                    <a href="https://youtu.be/CXKj7bm4Ops" target="_blank" rel="noopener noreferrer">
                        <img src={img2} alt="7-dars" />
                        <p>7-dars His qilish</p>
                        <h4>3 daqiqa</h4>
                    </a>
                </div>
                <div className={style.box}>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src={img3} alt="8-dars" />
                        <p>8-dars Buyumlarga ta’rif beramiz</p>
                        <h4>3 daqiqa</h4>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Videos;
