import React from "react";
import ProductList from "./ProductList";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        product: state.homePage.product,
    }
}

let mapDispatchToProps = (dispatch) => {}

const ProductListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductList)

export default ProductListContainer;