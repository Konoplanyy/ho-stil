// import React from "react";
// import Layout from "../content/layout/layout";
// import {useParams} from "react-router-dom";
// import hostelDataF from "../Data/hosteldata";
// import style from "./category.module.css";
// import {Swiper, SwiperSlide} from 'swiper/react';
//
// function GetCardOfName(name){
//
// }
//
// function Category() {
//     let categories = [];
//     let buttons = [];
//     let Data = hostelDataF().hitData;
//     for(let i = 0; i < Data.length; i++)
//     {
//         if (!categories.includes(Data[i].city)) {
//             categories.push(Data[i].city);
//         }
//     }
//
//
//     categories.forEach((item) => {
//         buttons.push(
//             <SwiperSlide>
//                 <button className={style.CityButton} onClick={GetCardOfName}>{item}</button>
//             </SwiperSlide>
//         );
//     });
//     return (
//             <Layout>
//                 <div className={style.main}>
//
//                     <div className={style.cityButtons}>
//                         <Swiper
//                             spaceBetween={5}
//                             slidesPerView={14}>
//                                 {buttons}
//                         </Swiper>
//                     </div>
//                 </div>
//             </Layout>
//     );
// }
//
// export default Category;


import React, { useState } from "react";
import Layout from "../content/layout/layout";
import {NavLink, useParams} from "react-router-dom";
import hostelDataF from "../Data/hosteldata";
import style from "./category.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';

function Category() {
    let categories = [];
    let buttons = [];
    let Data = hostelDataF().hitData;


    const [selectedCity, setSelectedCity] = useState(""); // Зберігаємо обраний місто

    let cards = [];

    for (let item = 0; item < Data.length; item++){
        if (Data[item].city == selectedCity)
        {
            cards.push(
                <div className={style.card}>
                    <div className={style.smallImg}><img src={Data[item].imageLink[0]} alt=""/></div>
                    <div className={style.name}><span>{Data[item].name}</span></div>
                    <div className={style.stats}>
                        <div className={style.info}><p>{Data[item].shortInfo}</p></div>
                        {/*<div className={style.info}><span>Двомісний</span><span>100</span></div>*/}
                        <div className={style.info}>
                            <div><span className={style.price}><span>{Data[item].newPrice}₴<span className={style.day}>/day</span></span></span></div>
                            <div><span className={style.beIcon}></span></div>
                        </div>
                    </div>
                    <div className={style.interaction}>
                        <NavLink to={"/Cart/" + (Data[item].id - 1)} className={style.button}><span>Детальніше</span><div><span className={style.beIcon}><img src={"https://icons.veryicon.com/png/o/miscellaneous/unicons/cart-38.png"} alt=""></img></span></div></NavLink>
                        <div className={style.amount}><span><img src={"https://static-00.iconduck.com/assets.00/love-icon-2048x1842-mkwx16i2.png"} alt=""></img></span></div>
                    </div>
                </div>
            );
        }
    }

    function handleCityButtonClick(city) {
        setSelectedCity(city);
    }

    for (let i = 0; i < Data.length; i++) {
        if (!categories.includes(Data[i].city)) {
            categories.push(Data[i].city);
        }
    }

    categories.forEach((item) => {
        buttons.push(
                <button className={style.CityButton} onClick={() => handleCityButtonClick(item)}>{item}</button>
        );
    });

    return (
        <Layout>
            <div className={style.main}>
                <div className={style.cityButtons}>
                    <div className={style.categories}>
                        {buttons}
                    </div>
                </div>
                <div className={style.deck}>
                    {cards}
                </div>
            </div>
        </Layout>
    );
}

export default Category;
