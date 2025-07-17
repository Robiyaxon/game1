import React from 'react';
import style from "./Videos.module.css";

const videos = [
  { id: "wJECu_mPBEk", title: "1-dars Sezgi o‘rganlari" },
  { id: "GLzHW4oDj7g", title: "2-dars Biz nimani ko‘ramiz?" },
  { id: "bEDlvOtHNRg", title: "3-dars Biz olamni qanday qabul qilamiz" },
  { id: "m6UsBR4xOHU", title: "4-dars Biz nimani eshitamiz?" },
  { id: "uspeilWB7o0", title: "5-dars Hid bilish" },
  { id: "j_YLc1P7DDc", title: "6-dars Ta’m sezish" },
  { id: "CXKj7bm4Ops", title: "7-dars His qilish" },
  { id: "AVxIGKZjyZY", title: "8-dars Buyumlarga ta’rif beramiz", start: 178 },
  { id: "iY2IXojrXwY", title: "9-dars Bizning dunyo qarashimiz", start: 178 }
];

const Videos = () => {
  return (
    <div className={style.wrapper} id="target-section1">
      <h1>Informatika fanidan videodarsliklar</h1>
      <div className={style.block}>
        {videos.map((video, index) => (
          <div className={style.box} key={index}>
            <iframe
              width="100%"
              height="215"
              loading="lazy"
              src={`https://www.youtube.com/embed/${video.id}${video.start ? `?start=${video.start}` : ''}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
