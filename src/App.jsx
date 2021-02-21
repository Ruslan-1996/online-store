import React from 'react';
import s from './App.module.css'
import './css/fontawesome.min.css'
import Header from "./stat/componets/Header/Header";
import Footer from "./stat/componets/Footer/Footer";
import HomePage from "./stat/componets/HomePage/HomePage";
import {Route} from "react-router-dom";
import ShopCart from "./stat/componets/ShopCart/ShopCart";

const App = (props) => {
    return (
            <div className={s.app}>
                <Header/>
                <div>
                    <Route path='/home' render={ () => <HomePage/>}/>
                    <Route path='/men' render={ () => <HomePage/>}/>
                    <Route path='/women' render={ () => <HomePage/>}/>
                    <Route path='/kids' render={ () => <HomePage/>}/>
                    <Route path='/jewellery' render={ () => <HomePage/>}/>
                    <Route path='/accessories' render={ () => <HomePage/>}/>
                    <Route path='/cart' render={ () => <ShopCart/>}/>
                </div>
                <Footer/>
            </div>
    );
}

export default App;


