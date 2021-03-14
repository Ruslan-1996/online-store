import React from "react";
import ProductList from "./ProductList";
import {connect} from "react-redux";
import {addProductInCart, onProductDelete} from "../../../../store/shopCartPage";
import {onToggleProductInCart} from "../../../../store/homePageReducer";


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


const ProductContainer = connect(mapStateToProps, {addProductInCart, onToggleProductInCart, onProductDelete})(ProductListContainer)

export default ProductContainer;