import React from "react";
import {connect} from "react-redux";
import {addProductInCart, onProductDelete} from "../../store/shopCartPage";
import {ProductType, setAssessment} from "../../store/homePageReducer";
import {AppStateType} from "../../store/store";
import ProductListWrapper from "./ProductListWrapper";

type PropsType = {
    addProductInCart: (id: number, name: string, cost: number) => void
    setAssessment: (assessment: number, id: number) => void
    onProductDelete: (id: number) => void
    productInCart: Array<number>
    product: Array<ProductType>
}

class ProductListWrapperContainer extends React.Component<PropsType> {

    onChange = (id:number, name: string, cost: number) => {
        this.props.addProductInCart(id, name, cost)
    }

    render() {
        return (<ProductListWrapper {...this.props} onChange={this.onChange}/>)
    }
}

type MapDispatchPropsType = {
    addProductInCart: (id: number, name: string, cost: number) => void
    setAssessment: (assessment: number, id: number) => void
    onProductDelete: (id: number) => void
}

export default connect<{}, MapDispatchPropsType, {}, AppStateType>(null, {addProductInCart, onProductDelete, setAssessment})(ProductListWrapperContainer);