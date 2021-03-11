import React from "react";
import {onNameEmailActionCreator} from "../../../../store/homePageReducer";
import Subscribe from "./Subscribe";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        nameEmail: state.homePage.nameEmail,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onNameEmail: (text) => {
        dispatch(onNameEmailActionCreator(text))
    }
    }
}

const SubscribeContainer = connect(mapStateToProps, mapDispatchToProps)(Subscribe)

export default SubscribeContainer;