import {useState, useEffect } from "react";
import Layout from "../content/layout/layout";
import {json, useParams} from "react-router-dom";
import hostelDataF from "../Data/hosteldata";
import style from "./cart.module.css";
import {Swiper, SwiperSlide} from 'swiper/react';


function Cart() {
    const id = useParams().id;
    // let hostelData = hostelDataF().hitData;
    const [hostelData, setHostelData] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/hotels/" + id)
            .then(response => response.json())
            .then(json => setHostelData(json));
    }, []);
    // console.log(hostelData);
    let SaleData = hostelDataF().SaleData;

    let HitCards = [];
    SaleData.forEach((item) => {
        HitCards.push(
            <SwiperSlide>
                <div>
                    <div className={style.bigСard}>
                        <img className={style.img} src={item.imagelink} alt="Dehumidifier" />
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
    if (hostelData.length != 0)
    {
        // console.log(hostelData);
        let unjsonresponse = JSON.parse(hostelData.responses);
        for (let i = 0; i < unjsonresponse.length; i++){
            response.push(
                <div className={style.response}>
                    <div className={style.responseUsername}>
                        <h1>{unjsonresponse[i].userName}</h1>
                    </div>
                    <div className={style.responseText}>
                        <h3>
                            {unjsonresponse[i].text}
                        </h3>
                    </div>
                </div>
            );
        }
    }
    // console.log(hostelData)
    return (
        <Layout>
            <div className={style.main}>
                <div className={style.image}>
                    <Swiper
                        spaceBetween={5}
                        slidesPerView={1}>
                        <img className={style.imageInSlider} src={hostelData.imagelink} alt=""/>
                    </Swiper>
                </div>
                <div className={style.MainText}>
                    <div className={style.CardText}>
                        <div className={style.CardName}>
                            <h1>{hostelData.name}</h1>
                        </div>
                        <div className={style.CardPrice}>
                            <h1>{hostelData.newprice}₴<span className={style.day}>/day</span></h1>
                        </div>
                        <div className={style.CardInfo}>
                            <h3>{hostelData.fullInfo}</h3>
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
