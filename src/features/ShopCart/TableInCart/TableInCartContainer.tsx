import {connect} from "react-redux";
import TableInCart from "./TableInCart";
import {CartProductType, onChangeInput, onProductDelete} from "../../../store/shopCartPage";
import {cartProduct} from "../../../store/shopPageSelectors";
import {AppStateType} from "../../../store/store";

type MapStatePropsType = {
    cartProduct: Array<CartProductType>
}

type MapDispatchPropsType = {
    onChangeInput: (value: string, id: number) => void
    onProductDelete: (id: number) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        cartProduct: cartProduct(state)
    }
}

const TableInCartContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
    {onProductDelete, onChangeInput})
(TableInCart);

export default TableInCartContainer;