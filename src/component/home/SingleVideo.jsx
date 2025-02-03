import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import vid1 from "../../assert/5.Sezish.mp4";
import vid2 from "../../assert/hid.mp4";
import vid3 from "../../assert/tam.mp4";
import vid4 from "../../assert/korish.mp4";
import vid5 from "../../assert/2.Eshitish.mp4";
import style from './SingleVideo.module.css'; // CSS faylini import qilish
const SingleVideo = () => {
    const { id } = useParams();  // Video ID parametri olish
    const [video, setVideo] = useState(null);

    // Video ma'lumotlarini belgilash
    const videos = {
        1: {
            title: "1-dars Sezish o'rganlari",
            url: vid1,
            duration: "2 daqiqa",
        },
        2: {
            title: "2-dars Hid bilish",
            url: vid2,
            duration: "2:13 daqiqa",
        },
        3: {
            title: "3-dars Tam bilish",
            url: vid3,
            duration: "2:16 daqiqa",
        },
        4: {
            title: "4-dars Ko`rish",
            url: vid4,
            duration: "2:40 daqiqa",
        },
        5: {
            title: "5-dars Eshitish",
            url: vid5,
            duration: "2:40 daqiqa",
        },
    };

    // useEffect yordamida faqat bir marta video ma'lumotlarini olish
    useEffect(() => {
        if (videos[id]) {
            setVideo(videos[id]);
        }
    }, [id]);  // 'id' o'zgarganda video yangilanadi

    if (!video) {
        return <div className={style.videoError}>Video topilmadi</div>;
    }

    return (
        <>
            <div className={style.videoContainer}>
                <h1 className={style.videoTitle}>{video.title}</h1>
                <video className={style.videoElement} controls>
                    <source src={video.url} type="video/mp4" />
                    Sizning brauzeringiz video formatini qo'llab-quvvatlamaydi.
                </video>
                <h4 className={style.videoDuration}>{video.duration}</h4>
            </div>
        </>

    );
};

export default SingleVideo;
