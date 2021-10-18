import React from "react";
import {connect} from "react-redux";
import ShoppingCartCalculator from "./ShoppingCartCalculator";
import {couponDiscount, subtotalShopCart, totalShopCart} from "../../../store/shopPageSelectors";
import {AppStateType} from "../../../store/store";


type MapStatePropsType = {
    subtotal: number
    couponDiscount: number
    totalShopCart: number
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        subtotal: subtotalShopCart(state),
        couponDiscount: couponDiscount(state),
        totalShopCart: totalShopCart(state)
    }
}


const ShoppingCartCalculatorContainer  = connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps)(ShoppingCartCalculator)

export default ShoppingCartCalculatorContainer;