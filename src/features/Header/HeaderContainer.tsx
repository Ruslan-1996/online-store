import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {lengthCartProduct} from "../../store/shopPageSelectors";
import {AppStateType} from "../../store/store";
import {CategoriesType} from "../../store/headerReducer";

type MapStatePropsType = {
    cartProductLength: number
    categories: Array<CategoriesType>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        cartProductLength: lengthCartProduct(state),
        categories: state.header.categories
    }
}


const HeaderContainer = connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps)(Header)

export default HeaderContainer;