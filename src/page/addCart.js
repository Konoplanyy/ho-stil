import React, {useEffect, useState} from "react";
import Layout from "../content/layout/layout";
import style from "./cartEdit.module.css";
import hostelDataF from "../Data/hosteldata";
import {NavLink} from "react-router-dom";

function AddCart()
{
    return(
        <Layout>
            <div className={style.main}>
                <form action="http://127.0.0.1:8000/hotels/create">
                    <div className={style.MainText}>
                        <div className={style.CardText}>
                            <div className={style.CardName}>
                                <h3>Name: </h3>
                                <input name="name" className={style.promoInput} placeholder={"Введіть текст"} type="text"/>
                            </div>
                            <div className={style.CardPrice}>
                                <h3>Price: </h3>
                                <h3><input name="newprice" className={style.promoInput} placeholder={"Введіть текст"}/>₴<span
                                    className={style.day}>/day</span>
                                </h3>
                            </div>
                        </div>
                        <div className={style.CardName}>
                            <h3>City: </h3>
                            <input name="city" className={style.promoInput} placeholder={"Введіть текст"} type="text"/>
                        </div>
                        <div className={style.CardInfo}>
                            <h3>Image Link: </h3>
                            <textarea name="imagelink" className={style.promoBigInput} placeholder={"Введіть текст"}/>
                        </div>
                        <div className={style.CardInfo}>
                            <h3>full Info: </h3>
                            <textarea name="fullInfo" className={style.promoBigInput} placeholder={"Введіть текст"}/>
                        </div>
                        <div className={style.CardInfo}>
                            <h3>short Info: </h3>
                            <textarea name="shortInfo" className={style.promoBigInput} placeholder={"Введіть текст"}/>
                        </div>
                        <div className={style.buyButton}>
                            <button type="submit">Зберегти зміни</button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default AddCart;