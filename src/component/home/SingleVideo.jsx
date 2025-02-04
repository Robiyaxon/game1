import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import vid1 from "../../assert/5.Sezish.mp4";
import vid2 from "../../assert/hid.mp4";
import vid3 from "../../assert/tam.mp4";
import vid4 from "../../assert/korish.mp4";
import vid5 from "../../assert/2.Eshitish.mp4";
import style from './SingleVideo.module.css';

const SingleVideo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [video, setVideo] = useState(null);

    // VIDEOLAR obyektini komponent tashqarisida yaratamiz
    const videos = {
        1: { title: "1-dars Sezish o'rganlari", url: vid1, duration: "2 daqiqa" },
        2: { title: "2-dars Hid bilish", url: vid2, duration: "2:13 daqiqa" },
        3: { title: "3-dars Tam bilish", url: vid3, duration: "2:16 daqiqa" },
        4: { title: "4-dars Ko`rish", url: vid4, duration: "2:40 daqiqa" },
        5: { title: "5-dars Eshitish", url: vid5, duration: "2:40 daqiqa" },
    };

    // useEffect faqat ID o'zgarganda ishlaydi
    useEffect(() => {
        if (videos[id]) {
            setVideo(videos[id]);
        }
    }, [id]); // `videos` ni dependency-ga kiritmang!

    if (!video) {
        return <div className={style.videoError}>Video topilmadi</div>;
    }

    return (
        <div className={style.videoContainer}>
            <h1 className={style.videoTitle}>{video.title}</h1>
            <video className={style.videoElement} controls>
                <source src={video.url} type="video/mp4" />
                Sizning brauzeringiz video formatini qo'llab-quvvatlamaydi.
            </video>
            <h4 className={style.videoDuration}>{video.duration}</h4>
            <button className={style.backButton} onClick={() => navigate("/")}>Bosh sahifaga qaytish</button>
        </div>
    );
};

export default SingleVideo;
