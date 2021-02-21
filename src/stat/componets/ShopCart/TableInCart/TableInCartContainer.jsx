import React from "react";
import {connect} from "react-redux";
import TableInCart from "./TableInCart";
import {onChangeInput, onProductDelete} from "../../../../store/shopCartPage";

let mapStateToProps = (state) => {
    return {
        cartProduct: state.shopCartPage.cartProduct,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeProductValue: (value, productId) => {
            dispatch(onChangeInput(value, productId))
        },
        onProductDelete: (productId) => {
            dispatch(onProductDelete(productId))
        },
    }
}

const TableInCartContainer = connect(mapStateToProps, mapDispatchToProps)(TableInCart);

export default TableInCartContainer;