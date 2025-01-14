import React from 'react'
import "./Info.css"
import img from "../../assert/22.png"
const Info = () => {
  return (
    <div className='wrapper'>
        <img src={img} className='img'/>

        <div className="information">
        <p className='interactive'>Interaktiv videodarslar: Bolalarga tushunarli va qiziqarli bo‘lgan videodarslar orqali o‘qitish. Har bir dars ma’lum mavzularni bosqichma-bosqich tushuntiradi, qiziqarli animatsiyalar va ovozli izohlar bilan boyitilgan. Videodarslar o‘quvchilarni asosiy kompyuter tushunchalari, dasturlashning ilk qadamlaridan boshlab tanishtiradi.</p>

        <p className='play'>O‘yinlar orqali o‘qitish: Yosh bolalar uchun kompyuter va informatika tushunchalarini qiziqarli o‘yinlar yordamida o‘rganish imkoniyati mavjud. Masalan, dasturlashning boshlang‘ich asoslarini o‘yin elementlari bilan birlashtirgan mini-loyihalar.</p>

        <p className='exercises'>Mashqlar va Testlar: Har bir darsning oxirida o‘tilgan mavzuni mustahkamlash uchun maxsus testlar va mashqlar mavjud. Bu testlar bolaning tushuncha darajasini aniqlash va o‘qituvchilarga uning qaysi sohalarda ko‘proq e’tibor qaratishi kerakligini bilishga yordam beradi.</p>

        <p className='interesting'>Qiziqarli Loyihalar: Platformada kichik loyiha asosida o‘rganish imkoniyati mavjud. Masalan, bolaning o‘zining oddiy kompyuter o‘yinini yaratishi yoki qiziqarli dasturiy loyihani amalga oshirishi mumkin.</p>

        <p className='parent'>Ota-onalar va o‘qituvchilar uchun kuzatuv va hisobotlar: Bolalarning o‘quv jarayonidagi muvaffaqiyatlarini kuzatish uchun maxsus hisobotlar va reyting tizimi mavjud. Bu tizim orqali ota-onalar va o‘qituvchilar bolalarning rivojlanishini kuzatib borishlari mumkin.</p>

        </div>

    </div>
  )
}

export default Info