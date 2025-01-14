import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const questions = [
    "Kompyuter bolajon platformasi nima?",
    "Kompyuter bolajon platformasi necha yoshdagi bolalar uchun?",
    "Kompyuter bolajon platformasi qaysi fanlarni qamrab oladi?",
    "Kompyuter bolajon platformasi qanday ishlaydi?",
    "Kompyuter bolajon platformasi bepulmi?",
    "Kompyuter bolajon platformasi qanday ko'nikmalarni o'rganadi?",
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faq}>
      <h2 className={styles.title}>Tez-tez so'raladigan savollar</h2>
      <ul className={styles.list}>
        {questions.map((question, index) => (
          <li key={index} className={styles.item}>
            <div
              className={styles.question}
              onClick={() => toggleAnswer(index)}
            >
              <span className={styles.icon}>
                {openIndex === index ? '-' : '+'}
              </span>
              {question}
            </div>
            {openIndex === index && (
              <div className={styles.answer}>
                Bu savolning javobi. (FAQ kontenti qo'shishingiz mumkin)
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
