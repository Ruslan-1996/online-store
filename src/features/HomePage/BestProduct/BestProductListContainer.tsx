import {connect} from "react-redux";
import {productInCart} from "../../../store/shopPageSelectors";
import ProductListWrapperContainer from "../../../common/ProductListWrapper/ProductListWrapperContainer";
import {AppStateType} from "../../../store/store";
import {ProductType} from "../../../store/homePageReducer";

type MapStatePropsType = {
    product: Array<ProductType>
    productInCart: Array<number>
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        product: state.homePage.bestProduct,
        productInCart: productInCart(state),
    }
}

const BestProductContainer = connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps)(ProductListWrapperContainer)

export default BestProductContainer;