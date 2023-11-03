import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./page/home";
import Category from "./page/category";
import Contacts from "./page/contacts";
import DeliveryAndPayment from "./page/deliveryAndPayment";
import CardProduct from "./page/cardProduct";
import Cart from "./page/cart";

// import About from "./";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/CardProduct" element={<CardProduct/>}/>
                <Route path="/Cart/:id" element={<Cart/>}/>
                <Route path="/Category" element={<Category/>}/>
                <Route path="/Contacts" element={<Contacts/>}/>
                <Route path="/DeliveryAndPayment" element={<DeliveryAndPayment/>}/>
                {/*<Route path="/product/:id(\d+)" component={CardProduct2}/>*/}
                {/*<Route path="/About" element={<About/>}/>*/}

            </Routes>
        </BrowserRouter>
    );
}

export default App;
