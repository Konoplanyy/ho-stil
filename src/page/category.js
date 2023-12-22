import React, {useEffect, useState} from "react";
import Layout from "../content/layout/layout";
import {NavLink} from "react-router-dom";
import hostelDataF from "../Data/hosteldata";
import style from "./category.module.css";

function Category() {
    let categories = [];
    let buttons = [];
    // let Data = hostelDataF().hitData;
    const [hostelsData, setHostelsData] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/hotels")
            .then(response => response.json())
            .then(json => setHostelsData(json));
    }, []);


    const [selectedCity, setSelectedCity] = useState(""); // Зберігаємо обраний місто

    let cards = [];

    for (let item = 0; item < hostelsData.length; item++){
        if (hostelsData[item].city == selectedCity)
        {
            cards.push(
                <div className={style.card}>
                    <div className={style.smallImg}><img src={hostelsData[item].imagelink} alt=""/></div>
                    <div className={style.name}><span>{hostelsData[item].name}</span></div>
                    <div className={style.stats}>
                        <div className={style.info}><p>{hostelsData[item].shortInfo}</p></div>
                        {/*<div className={style.info}><span>Двомісний</span><span>100</span></div>*/}
                        <div className={style.info}>
                            <div><span className={style.price}><span>{hostelsData[item].newprice}₴<span className={style.day}>/day</span></span></span></div>
                            <div><span className={style.beIcon}></span></div>
                        </div>
                    </div>
                    <div className={style.interaction}>
                        <NavLink to={"/Cart/" + (hostelsData[item].id)} className={style.button}><span>Детальніше</span><div><span className={style.beIcon}><img src={"https://icons.veryicon.com/png/o/miscellaneous/unicons/cart-38.png"} alt=""></img></span></div></NavLink>
                        <div className={style.amount}><span><img src={"https://static-00.iconduck.com/assets.00/love-icon-2048x1842-mkwx16i2.png"} alt=""></img></span></div>
                    </div>
                </div>
            );
        }
    }

    function handleCityButtonClick(city) {
        setSelectedCity(city);
    }

    for (let i = 0; i < hostelsData.length; i++) {
        if (!categories.includes(hostelsData[i].city)) {
            categories.push(hostelsData[i].city);
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
