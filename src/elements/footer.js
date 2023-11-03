import style from "./footer.module.css";
import React from "react";
import Cart from "../page/cart";

function Footer() {
    return(
        <div className={style.promo}>
            <div className={style.promoContain}>
                <div className={style.promoBG}></div>
                <div className={style.promoText}>
                    <span className={style.promoSpan}>Потрібна допомога?</span>
                    <span className={style.promoSpan}>Ми допоможемо</span>
                </div>
                <div className={style.promoInteraction}>
                    <input className={style.promoInput} placeholder={"Введіть текст"} type="text"/>
                    <button className={style.promoButton}><span>Відправити</span></button>
                </div>
            </div>
        </div>
    );
}

export default Footer;