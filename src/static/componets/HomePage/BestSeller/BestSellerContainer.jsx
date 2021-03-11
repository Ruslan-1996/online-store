import React from "react";
import BestSeller from "./BestSeller";
import {connect} from "react-redux";
import {addProductInCart} from "../../../../store/shopCartPage";


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


const BestSellerContainer = connect(mapStateToProps, {addProductInCart})(BestSellerClass)

export default BestSellerContainer;