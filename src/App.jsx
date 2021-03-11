import React from 'react';
import s from './App.module.css'
import './css/fontawesome.min.css'
import Header from "./static/componets/Header/Header";
import Footer from "./static/componets/Footer/Footer";
import HomePage from "./static/componets/HomePage/HomePage";
import {Route} from "react-router-dom";
import ShopCart from "./static/componets/ShopCart/ShopCart";
import HeaderContainer from "./static/componets/Header/HeaderContainer";

const App = (props) => {
    return (
            <div className={s.app}>
                <HeaderContainer/>
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


