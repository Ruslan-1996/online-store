import React, {ReactComponentElement, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import HomePage from './HomePage';
import {compose} from "redux";
import {connect} from "react-redux";
import {setProducts} from "../../store/homePageReducer";
import {AppStateType} from "../../store/store";
import {CategoriesType} from "../../store/headerReducer";

type OwnType = {
    match: any
}

type MapDispatchPropsType = {
    setProducts: (categories: number) => void
}

type MapStatePropsType = {
    categories: Array<CategoriesType>
}

const HomePageContainer: React.FC<OwnType & MapDispatchPropsType & MapStatePropsType> = (props) => {

    useEffect(() => {
        let categoryURL = props.match.params.categories
        if(props.categories.some(category => category.name.toLowerCase() === categoryURL)) {
            let idCategories = props.categories.filter(id => id.name === categoryURL.toUpperCase())

            if (categoryURL === 'home') {
                idCategories = props.categories
            }
            props.setProducts(idCategories[0].id)
        }
    })

    return (



       <HomePage/>
    );
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        categories: state.header.categories
    }
}

const HomePageWithRouter = compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnType, AppStateType>(MapStateToProps, {setProducts}),
    withRouter)(HomePageContainer)

export default HomePageWithRouter;


