import React from "react";
import Layout from "../content/layout/layout";
import style from "./cardProduct.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {NavLink} from "react-router-dom";
import hostelDataF from "../Data/hosteldata";

function CardProduct() {
    let Data = hostelDataF().hitData;

    let cards = [];

    for (let item = 0; item < Data.length; item++){
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


    return (
        <Layout>
            <div className={style.main}>
                <div>
                    <div className={style.section}>
                        <div className={style.deck}>
                            {cards}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default CardProduct;
