import React from 'react';
import s from './App.module.css'
import './styles/fontawesome.min.css'
import Footer from "./features/Footer/Footer";
import HomePage from "./features/HomePage/HomePage";
import {Redirect, Route} from "react-router-dom";
import ShopCart from "./features/ShopCart/ShopCart";
import HeaderContainer from "./features/Header/HeaderContainer";

const App = () => {
    return (
            <div className={s.app}>
                <div className={s.pageWrapper}>
                <HeaderContainer/>
                <div>
                    <Route path='/' render={ () => <Redirect to={'/home'}/>}/>
                    <Route path='/home' render={ () => <HomePage/>}/>
                    <Route path='/men' render={ () => <HomePage/>}/>
                    <Route path='/women' render={ () => <HomePage/>}/>
                    <Route path='/kids' render={ () => <HomePage/>}/>
                    <Route path='/jewellery' render={ () => <HomePage/>}/>
                    <Route path='/accessories' render={ () => <HomePage/>}/>
                    <Route path='/cart' render={ () => <ShopCart/>}/>
                </div>
                </div>
                <Footer/>
            </div>
    );
}

export default App;


