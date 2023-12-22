import React, {useEffect, useState} from "react";
import Layout from "../content/layout/layout";
import style from "./admin.module.css";
import hostelDataF from "../Data/hosteldata";
import {NavLink} from "react-router-dom";


function Admin() {

    // let Data = hostelDataF().hitData;
    const [Data, setData] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/hotels")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error("Error fetching data:", error));
    }, [])

    // console.log(Data)

    let cards = [];

    for (let item = 0; item < Data.length; item++) {
        cards.push(
            <div className={style.card}>
                <div className={style.smallImg}><img src={Data[item].imagelink} alt=""/></div>
                <div className={style.name}><span>{Data[item].name}</span></div>
                <div className={style.stats}>
                    <div className={style.info}><p>{Data[item].shortInfo}</p></div>
                    {/*<div className={style.info}><span>Двомісний</span><span>100</span></div>*/}
                    <div className={style.info}>
                        <div><span className={style.price}><span>{Data[item].newprice}₴<span
                            className={style.day}>/day</span></span></span></div>
                        <div><span className={style.beIcon}></span></div>
                    </div>
                </div>
                <div className={style.interaction}>
                    <NavLink to={"/Cart/edit/" + (Data[item].id)}
                             className={style.button}><span>Редагувати</span></NavLink>
                </div>
            </div>
        );
    }

    return (
        <Layout>
            <div className={style.actions}>
                <NavLink to="/Cart/add" className={style.addbutton}><span>Додати</span></NavLink>
            </div>
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

export default Admin;