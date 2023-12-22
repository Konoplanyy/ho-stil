import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./page/home";
import Category from "./page/category";
import Contacts from "./page/contacts";
import DeliveryAndPayment from "./page/deliveryAndPayment";
import CardProduct from "./page/cardProduct";
import Cart from "./page/cart";
import Admin from "./page/admin";
import CartEdit from "./page/cartEdit";
import AddCart from "./page/addCart";

// import About from "./";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/CardProduct" element={<CardProduct/>}/>
                <Route path="/Cart/:id" element={<Cart/>}/>
                <Route path="/Cart/add" element={<AddCart/>}/>
                <Route path="/Cart/edit/:id" element={<CartEdit/>}/>
                <Route path="/Category" element={<Category/>}/>
                <Route path="/Contacts" element={<Contacts/>}/>
                <Route path="/DeliveryAndPayment" element={<DeliveryAndPayment/>}/>
                <Route path="/Admin" element={<Admin/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
