import React, { useEffect, useState } from 'react';
import style from "./Count.module.css";

const Count = () => {
  const [userCount, setUserCount] = useState(0);
  const [videoCount, setVideoCount] = useState(0);
  const [bookCount, setBookCount] = useState(0);

  useEffect(() => {
    // Foydalanuvchilar sonini oshirish
    const userInterval = setInterval(() => {
      setUserCount((prev) => {
        if (prev < 7800) return prev + 1;
        clearInterval(userInterval); // To'xtatish
        return prev;
      });
    }, 50);

    // Videodarsliklar sonini oshirish
    const videoInterval = setInterval(() => {
      setVideoCount((prev) => {
        if (prev < 126) return prev + 1;
        clearInterval(videoInterval); // To'xtatish
        return prev;
      });
    }, 80);

    // Kitoblar sonini oshirish
    const bookInterval = setInterval(() => {
      setBookCount((prev) => {
        if (prev < 397) return prev + 1;
        clearInterval(bookInterval); // To'xtatish
        return prev;
      });
    }, 60);

    return () => {
      clearInterval(userInterval);
      clearInterval(videoInterval);
      clearInterval(bookInterval);
    };
  }, []);

  return (
    <div className={style.wrapper}>
      <h1>Bizning foydalanuvchilar safiga qo'shiling</h1>
      <div className={style.Box1}>
        <div className={style.box}>
          <p>Foydalanuvchilar soni</p>
          <h1>{userCount}+</h1>
        </div>
        <div className={style.box}>
          <p>Videodarsliklar soni</p>
          <h1>{videoCount}+</h1>
        </div>
        <div className={style.box}>
          <p>Onlayn kutubxonadagi adabiyotlar soni</p>
          <h1>{bookCount}+</h1>
        </div>
      </div>
    </div>
  );
};

export default Count;
