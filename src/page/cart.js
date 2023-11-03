import React from "react";
import Layout from "../content/layout/layout";
import {useParams} from "react-router-dom";
import hostelDataF from "../Data/hosteldata";
import style from "./cart.module.css";
import {Swiper, SwiperSlide} from 'swiper/react';


function Cart() {
    const id = useParams().id;
    let hostelData = hostelDataF().hitData;
    let SaleData = hostelDataF().SaleData;

    let HitCards = [];
    SaleData.forEach((item) => {
        HitCards.push(
            <SwiperSlide>
                <div>
                    <div className={style.bigСard}>
                        <img className={style.img} src={item.imageLink[0]} alt="Dehumidifier" />
                        <div className={style.cardBody}>
                            <h2 className={style.oldPrice}>{item.oldPrice}₴</h2>
                            <h1 className={style.newPrice}>{item.newPrice}₴<span className={style.day}>/day</span></h1>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        );
    });

    let response = [];
    for (let i = 0; i < hostelData[id].responses.length; i++){
        response.push(
            <div className={style.response}>
                <div className={style.responseUsername}>
                    <h1>{hostelData[id].responses[i].userName}</h1>
                </div>
                <div className={style.responseText}>
                    <h3>
                        {hostelData[id].responses[i].text}
                    </h3>
                </div>
            </div>
        );
    }

    let images = [];
    for(let i = 0; i < hostelData[id].imageLink.length; i++){
        images.push(
            <SwiperSlide>
                <img className={style.imageInSlider} src={hostelData[id].imageLink[i]}/>
            </SwiperSlide>
        );
    };

    return (
        <Layout>
            <div className={style.main}>
                <div className={style.image}>
                    <Swiper
                        spaceBetween={5}
                        slidesPerView={1}>
                        {images}
                    </Swiper>
                </div>
                <div className={style.MainText}>
                    <div className={style.CardText}>
                        <div className={style.CardName}>
                            <h1>{hostelData[id].name}</h1>
                        </div>
                        <div className={style.CardPrice}>
                            <h1>{hostelData[id].newPrice}₴<span className={style.day}>/day</span></h1>
                        </div>
                        <div className={style.CardInfo}>
                            <h3>{hostelData[id].fullInfo}</h3>
                        </div>
                    </div>
                    <div className={style.buyButton}>
                        <button>До кошика</button>
                    </div>
                </div>
            </div>
            <div className={style.responses}>
                {response}
            </div>
            <div className={style.More}>
                <Swiper
                    className={style.swiper}
                    spaceBetween={0}
                    slidesPerView={4}>
                    {HitCards}
                </Swiper>
            </div>

        </Layout>
    );
}

export default Cart;
