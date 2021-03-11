import React from "react";
import {connect} from "react-redux";
import ShippingAvailability from "./ShippingAvailability";
import {
    onPostcodeActionCreator,
    onSelectCountryActionCreator,
    onSelectStateActionCreator
} from "../../../../store/shopCartPage";

let mapStateToProps = (state) => {
    return {
        country: state.shopCartPage.country,
        stateInCountry: state.shopCartPage.stateInCountry,
        postcode: state.shopCartPage.postcode,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onCounty: (text) => {
            dispatch(onSelectCountryActionCreator(text))
        },
        onState: (text) => {
            dispatch(onSelectStateActionCreator(text))
        },
        onPostcode: (text) => {
            dispatch(onPostcodeActionCreator(text))
        }
    }
}

const ShippingAvailabilityContainer = connect(mapStateToProps, mapDispatchToProps)(ShippingAvailability)

export default ShippingAvailabilityContainer;