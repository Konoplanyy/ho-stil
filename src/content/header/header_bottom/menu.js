import React from "react";
import {NavLink} from 'react-router-dom';
import 'swiper/css';
import style from "./menu.module.css";

// import Layout from "../content/layout/layout";

function Menu() {
    return (
        <>
            <div className={style.headerTop}>
                <ul className={style.infoInner}>
                        <li  className={`${style.infoItem} ${ style.menuText}`}>
                            <NavLink to="/"
                                     className={(navData) => navData.isActive ? style.activeLink : style.link}>HOME</NavLink>
                        </li>
                        <li className={`${style.infoItem} ${ style.menuText}`}>
                            <NavLink to="/CardProduct"
                                     className={(navData) => navData.isActive ? style.activeLink : style.link}>PRODUCT</NavLink>
                        </li>
                        {/*<li className={`${style.infoItem} ${ style.menuText}`}>*/}
                        {/*    <NavLink to="/Cart"*/}
                    {/*             className={(navData) => navData.isActive ? style.activeLink : style.link}>CARD</NavLink>*/}
                    {/*</li>*/}
                    <li className={`${style.infoItem} ${style.menuText}`}>
                        <NavLink to="/Category"
                                 className={(navData) => navData.isActive ? style.activeLink : style.link}>CATEGORY</NavLink>
                    </li>
                    <li className={`${style.infoItem} ${style.menuText}`}>
                        <NavLink to="/Contacts"
                                 className={(navData) => navData.isActive ? style.activeLink : style.link}>CONTACTS</NavLink>
                    </li>
                    <li className={`${style.infoItem} ${style.menuText}`}>
                        <NavLink to="/Admin"
                                 className={(navData) => navData.isActive ? style.activeLink : style.link}>ADMIN</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Menu;
