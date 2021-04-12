import React from "react";
import {connect} from "react-redux";
import {productInCart} from "../../../store/shopPageSelectors";
import ProductListWrapperContainer from "../../../common/ProductListWrapper/ProductListWrapperContainer";
import {ProductType} from "../../../store/homePageReducer";
import {AppStateType} from "../../../store/store";

type MapStatePropsType = {
    product: Array<ProductType>
    productInCart: Array<number>
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        product: state.homePage.product,
        productInCart: productInCart(state),
    }
}


const ProductContainer = connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps)(ProductListWrapperContainer)

export default ProductContainer;