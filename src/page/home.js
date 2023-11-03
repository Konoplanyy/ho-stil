import React from "react";
import 'swiper/css';
import style from "./home.module.css";
import Layout from "../content/layout/layout";
import {Swiper, SwiperSlide} from 'swiper/react';
import hostelDataF from "../Data/hosteldata";
import {NavLink} from 'react-router-dom';


function Home() {
    let Data = hostelDataF().hitData;
    let SaleData = hostelDataF().SaleData;

    let HitCards = [];
    let cards = [];

    SaleData.forEach((item) => {
        HitCards.push(
            <SwiperSlide>
                <div>
                    <div className={style.bigСard}>
                        <img className={style.img} src={item.imageLink} alt="Dehumidifier" />
                        <div className={style.cardBody}>
                            <h2 className={style.oldPrice}>{item.oldPrice}₴</h2>
                            <h1 className={style.newPrice}>{item.newPrice}₴<span className={style.day}>/day</span></h1>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        );
    });

    for (let item = 0; item < Data.length && item < 12; item++){
       cards.push(
           <div className={style.card}>
               <div className={style.smallImg}><img src={Data[item].imageLink[0]} alt=""/></div>
               <div className={style.name}><span>{Data[item].name}</span></div>
               <div className={style.stats}>
                   <div className={style.info}><p>{Data[item].shortInfo}</p></div>
                   {/*<div className={style.info}><span>Двомісний</span><span>100</span></div>*/}
                   <div className={style.info}>
                       <div><span className={style.price}><span>{Data[item].newPrice}₴</span></span></div>
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


    return (
        <Layout>
            <div className={style.main}>
                <div>
                    <div className={style.title}>
                        <h1>Хіти продажів</h1>
                    </div>
                    <Swiper
                        className={style.swiper}
                        spaceBetween={0}
                        slidesPerView={3}>
                        {HitCards}
                    </Swiper>
                    <div className={style.section}>
                        <div className={style.deck}>
                            {cards}
                        </div>
                    </div>
                    <NavLink to={"/CardProduct"} className={style.MoreButton}>
                        <span>Показати більше</span>
                    </NavLink>
                </div>
            </div>
        </Layout>
    );
}

export default Home;