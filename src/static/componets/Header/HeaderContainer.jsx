import React from "react";
import Header from "./Header";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        cartProductLength: state.shopCartPage.cartProduct.length
    }
}
const mapDispatchToProps = (dispatch) => {}


const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer;