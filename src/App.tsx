import React from 'react';
import s from './App.module.css'
import Footer from "./features/Footer/Footer";
import {Redirect, Route, Switch} from "react-router-dom";
import ShopCart from "./features/ShopCart/ShopCart";
import HeaderContainer from "./features/Header/HeaderContainer";
import {connect} from "react-redux";
import {AppStateType} from "./store/store";
import {initializedAPP} from "./store/appReducer";
import Preloader from "./common/Preloader/Preloader";
import HomePageContainer from './features/HomePage/HomePageContainer';

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

    render() {
        if (!this.props.inizializedAppBoolean) {
            return <div className={s.preloader}>
                <Preloader/>
            </div>
        }

        return (
            <div className={s.app}>
                <div className={s.pageWrapper}>
                    <HeaderContainer />
                    <div className={s.content}>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to={'/home'}/>}/>
                            <Route path='/cart' render={() => <ShopCart/>}/>
                            <Route path='/:categories?' render={() => <HomePageContainer/>}/>
                            <Route path='*' render={() => <div>404</div>}/>
                        </Switch>
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


