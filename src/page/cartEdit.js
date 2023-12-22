import React, {useEffect, useState} from "react";
import Layout from "../content/layout/layout";
import {NavLink, useParams} from "react-router-dom";
import hostelDataF from "../Data/hosteldata";
import style from "./cartEdit.module.css";
import {Swiper, SwiperSlide} from 'swiper/react';

var id = 0;

function handleSubmit(event)
{
    fetch("http://127.0.0.1:8000/api/hotels/" + id + "/edit?name=" + event.target.name.value
        + "&newprice=" + event.target.newprice.value +"&city=" + event.target.city.value +
        "&imagelink=" + event.target.imagelink.value +
        "&fullInfo=" + event.target.fullInfo.value +"&shortInfo=" + event.target.shortInfo.value)
    event.preventDefault()
}

function Remove()
{
    fetch("http://127.0.0.1:8000/api/hotels/" + id, {
        method: 'DELETE',
    })
}

function CartEdit() {
    id = useParams().id;
    // let hostelData = hostelDataF().hitData;
    const [hostelData, setHostelData] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/hotels/" + id)
            .then(response => response.json())
            .then(json => setHostelData(json));
    }, []);


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


    return (
        <Layout>
            <div className={style.main}>
                <div className={style.image}>
                    <Swiper
                        spaceBetween={5}
                        slidesPerView={1}>
                        {/*{images}*/}
                        <img className={style.imageInSlider} src={hostelData.imagelink}/>
                    </Swiper>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={style.MainText}>
                        <div className={style.CardText}>
                            <div className={style.CardName}>
                                <input name="name" className={style.promoInput} placeholder={"Введіть текст"} type="text"
                                       defaultValue={hostelData.name}/>
                                {/*<input name="name" className={style.promoInput} placeholder={"Введіть текст"} type="text"*/}
                                {/*       value={FormData.name} defaultValue={hostelData.name}/>*/}
                                {/*{console.log(FormData.name)}*/}
                            </div>
                            <div className={style.CardPrice}>
                                <h3><input name="newprice" className={style.promoInput} placeholder={"Введіть ціну"}
                                              defaultValue={hostelData.newprice}/>₴<span
                                    className={style.day}>/day</span>
                                </h3>
                            </div>
                        </div>
                            <div className={style.CardName}>
                                <h3>City: </h3>
                                <input name="city" className={style.promoInput} placeholder={"Введіть текст"} type="text"
                                       defaultValue={hostelData.city}/>
                            </div>
                            <div className={style.CardInfo}>
                                        <h3>Image Link: </h3>
                                        <textarea name="imagelink" className={style.promoBigInput} placeholder={"Введіть текст"}
                                                  defaultValue={hostelData.imagelink}/>
                            </div>
                            <div className={style.CardInfo}>
                                <h3>full Info: </h3>
                                <textarea name="fullInfo" className={style.promoBigInput} placeholder={"Введіть текст"}
                                       defaultValue={hostelData.fullInfo}/>
                            </div>
                            <div className={style.CardInfo}>
                                <h3>short Info: </h3>
                                    <textarea name="shortInfo" className={style.promoBigInput} placeholder={"Введіть текст"}
                                              defaultValue={hostelData.shortInfo}/>
                            </div>
                        <div className={style.buyButton}>
                            <button type="submit">Зберегти зміни</button>
                        </div>
                        <div className={style.RemoveButton}>
                            <NavLink to ={"/Admin"} onClick={Remove}>Видалити</NavLink>
                        </div>
                    </div>
                </form>
            </div>
            <div className={style.responses}>
                {response}
            </div>

        </Layout>
    );
}

export default CartEdit;
