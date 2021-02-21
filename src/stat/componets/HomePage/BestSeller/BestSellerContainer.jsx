import React from "react";
import BestSeller from "./BestSeller";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        bestProduct: state.homePage.bestProduct,
    }
}

let mapDispatchToProps = (dispatch) => {}

const BestSellerContainer = connect(mapStateToProps, mapDispatchToProps)(BestSeller)

export default BestSellerContainer;