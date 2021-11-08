import React from "react";
import s from "./ProductListWrapper.module.css";
import {connect} from "react-redux";
import {addProductInCart, onProductDelete} from "../../store/shopCartPage";
import {ProductType, setAssessment} from "../../store/homePageReducer";
import {AppStateType} from "../../store/store";
import ProductListWrapper from "./ProductListWrapper";
import Preloader from "../Preloader/Preloader";

type OwnPropsType = {
    productInCart: Array<number>
    product: Array<ProductType>
}

type MapDispatchPropsType = {
    addProductInCart: (id: number, name: string, cost: number, image: string) => void
    setAssessment: (assessment: number, id: number) => void
    onProductDelete: (id: number) => void
}

type MapStatePropsType = {
    isPreloader: boolean
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class ProductListWrapperContainer extends React.Component<PropsType> {

    onChange = (id: number, name: string, cost: number, image: string) => {
        this.props.addProductInCart(id, name, cost, image)
    }

    render() {
        if (this.props.isPreloader) {
            return (
                <div className={s.preloader}>
                    <Preloader/>
                </div>
            )
        }

        return (<ProductListWrapper {...this.props} onChange={this.onChange}/>)
    }
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isPreloader: state.homePage.isPreloader
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(MapStateToProps, {
    addProductInCart,
    onProductDelete,
    setAssessment
})(ProductListWrapperContainer);