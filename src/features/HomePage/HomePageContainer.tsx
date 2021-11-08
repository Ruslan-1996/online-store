import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import HomePage from './HomePage';
import {compose} from "redux";
import {connect} from "react-redux";
import {setProducts} from "../../store/homePageReducer";
import {AppStateType} from "../../store/store";
import {CategoriesType} from "../../store/headerReducer";

type OwnType = {
    match: {
        params: {
            categories: string
        }
    }
}

type MapDispatchPropsType = {
    setProducts: (categories: number) => void
}

type MapStatePropsType = {
    categories: Array<CategoriesType>
}

const HomePageContainer: React.FC<OwnType & MapDispatchPropsType & MapStatePropsType> = (props) => {
    const {categories, setProducts}= props
    const [pageFound, setPageFound] = useState(true)
    let categoryURL = props.match.params.categories

    useEffect(() => {
        if (categories.some(category => category.name.toLowerCase() === categoryURL) || categoryURL === 'home') {
            setPageFound(true)
            let idCategories = categories.filter(id => id.name === categoryURL.toUpperCase())

            if (categoryURL === 'home') {
                setProducts(categories[0].id)
            } else {
                setProducts(idCategories[0].id)
            }
        } else {
            setPageFound(false)
        }
        window.scrollTo(0,0)
    }, [categoryURL, categories, setProducts])

    return <HomePage pageFound={pageFound}/>
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


