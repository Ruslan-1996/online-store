import {connect} from "react-redux";
import ShippingAvailability from "./ShippingAvailability";
import {
    onPostCodeActionCreator,
    onSelectCountryActionCreator,
    onSelectStateActionCreator
} from "../../../store/shopCartPage";
import {AppStateType} from "../../../store/store";

type MapStatePropsType = {
    country: string,
    stateInCountry: string,
    postcode: string,
}

type MapDispatchPropsType = {
    onSelectCountryActionCreator: (text: string) => void
    onSelectStateActionCreator: (text: string) => void
    onPostCodeActionCreator: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        country: state.shopCartPage.country,
        stateInCountry: state.shopCartPage.stateInCountry,
        postcode: state.shopCartPage.postcode,
    }
}

const ShippingAvailabilityContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    onSelectCountryActionCreator,
    onSelectStateActionCreator,
    onPostCodeActionCreator
})(ShippingAvailability)

export default ShippingAvailabilityContainer;