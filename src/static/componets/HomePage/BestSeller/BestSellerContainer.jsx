import React from "react";
import BestSeller from "./BestSeller";
import {connect} from "react-redux";
import {addProductInCart, onProductDelete} from "../../../../store/shopCartPage";
import {onToggleProductInCart} from "../../../../store/homePageReducer";


class BestSellerClass extends React.Component {
    onChange = (id, nameProduct, cost, totalCost) => {
        this.props.addProductInCart(id, nameProduct, cost, totalCost)
    }

    render() {
        return (<BestSeller {...this.props} onChange={this.onChange}/>)
    }
}


let mapStateToProps = (state) => {
    return {
        bestProduct: state.homePage.bestProduct,
    }
}


const BestSellerContainer = connect(mapStateToProps, {addProductInCart, onToggleProductInCart, onProductDelete})(BestSellerClass)

export default BestSellerContainer;