import React from "react";
import ProductList from "./ProductList";
import {connect} from "react-redux";
import BestSeller from "../BestSeller/BestSeller";
import {addProductInCart} from "../../../../store/shopCartPage";


class ProductListContainer extends React.Component {
    onChange = (id, nameProduct, cost, totalCost) => {
        this.props.addProductInCart(id, nameProduct, cost, totalCost)
    }

    render() {
        return (<ProductList {...this.props} onChange={this.onChange}/>)
    }
}

let mapStateToProps = (state) => {
    return {
        product: state.homePage.product,
    }
}


const ProductContainer = connect(mapStateToProps, {addProductInCart})(ProductListContainer)

export default ProductContainer;