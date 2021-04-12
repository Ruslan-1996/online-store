import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {lengthCartProduct} from "../../store/shopPageSelectors";
import {AppStateType} from "../../store/store";

type MapStatePropsType = {
    cartProductLength: number
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        cartProductLength: lengthCartProduct(state)
    }
}


const HeaderContainer = connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps)(Header)

export default HeaderContainer;