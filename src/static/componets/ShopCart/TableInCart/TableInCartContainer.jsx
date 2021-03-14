import React from "react";
import {connect} from "react-redux";
import TableInCart from "./TableInCart";
import {changeSubtotal, onChangeInput, onProductDelete} from "../../../../store/shopCartPage";
import {onToggleProductInCart} from "../../../../store/homePageReducer";

let mapStateToProps = (state) => {
    return {
        cartProduct: state.shopCartPage.cartProduct,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         onChangeProductValue: (value, productId) => {
//             dispatch(onChangeInput(value, productId))
//         },
//         onProductDelete: (productId) => {
//             dispatch(onProductDelete(productId))
//         },
//     }
// }

const TableInCartContainer = connect(mapStateToProps,
    {changeSubtotal, onToggleProductInCart, onProductDelete, onChangeInput})
(TableInCart);

export default TableInCartContainer;