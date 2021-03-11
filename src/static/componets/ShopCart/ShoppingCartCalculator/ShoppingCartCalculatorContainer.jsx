import s from "./ShoppingCartCalculator.module.css";
import React from "react";
import {connect} from "react-redux";
import ShoppingCartCalculator from "./ShoppingCartCalculator";


let mapStateToProps = (state) => {
    return {
        subtotal: state.shopCartPage.subtotal,
    }
}


const ShoppingCartCalculatorContainer  = connect(mapStateToProps)(ShoppingCartCalculator)

export default ShoppingCartCalculatorContainer;