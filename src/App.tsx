import React, {useState} from 'react';
import s from './App.module.css'
import Footer from "./features/Footer/Footer";
import HomePage from "./features/HomePage/HomePage";
import {Redirect, Route} from "react-router-dom";
import ShopCart from "./features/ShopCart/ShopCart";
import HeaderContainer from "./features/Header/HeaderContainer";
import {connect} from "react-redux";
import {AppStateType} from "./store/store";
import {initializedAPP} from "./store/appReducer";
import Preloader from "./common/Preloader/Preloader";

type PropsType = {
    inizializedAppBoolean: boolean
    initializedAPP: () => void
}

type StateType = {
    isActiveBurger: boolean
}

class AppContainer extends React.Component<PropsType, StateType> {
    componentDidMount() {
        this.props.initializedAPP()
    }

    state: StateType = {
        isActiveBurger: false
    }


    setIsActiveBurger: (boolean: any) => void = (boolean) => {
        this.setState({isActiveBurger: boolean});
    }

    render() {
        if (!this.props.inizializedAppBoolean) {
            return <Preloader/>
        }

        return (
            <div className={`${s.app} ${this.state.isActiveBurger && s.active}`}>
                <div className={s.pageWrapper}>
                    <HeaderContainer setIsActiveBurger={this.setIsActiveBurger} isActiveBurger={this.state.isActiveBurger}/>
                    <div className={s.content}>
                        <Route path='/' render={() => <Redirect to={'/home'}/>}/>
                        <Route path='/home' render={() => <HomePage/>}/>
                        <Route path='/men' render={() => <HomePage/>}/>
                        <Route path='/women' render={() => <HomePage/>}/>
                        <Route path='/kids' render={() => <HomePage/>}/>
                        <Route path='/jewellery' render={() => <HomePage/>}/>
                        <Route path='/accessories' render={() => <HomePage/>}/>
                        <Route path='/cart' render={() => <ShopCart/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        inizializedAppBoolean: state.app.inizializedApp
    }
}

const App = connect(mapStateToProps, {initializedAPP})(AppContainer)

export default App;


