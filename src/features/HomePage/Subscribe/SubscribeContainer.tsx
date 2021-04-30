import React from "react";
import {onNameEmailActionCreator} from "../../../store/homePageReducer";
import Subscribe from "./Subscribe";
import {connect} from "react-redux";
import {AppStateType} from "../../../store/store";

type MapStatePropsType = {
    nameEmail: string
}

type MapDispatchPropsType = {
    onNameEmailActionCreator: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        nameEmail: state.homePage.nameEmail,
    }
}

const SubscribeContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
                            (mapStateToProps, {onNameEmailActionCreator})(Subscribe)

export default SubscribeContainer;