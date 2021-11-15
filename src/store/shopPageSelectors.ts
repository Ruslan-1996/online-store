import {createSelector} from "reselect";
import {AppStateType} from "./store";

const productsInCartSelector = (state: AppStateType) => {
    return state.shopCartPage.cartProduct
}
export const cartProduct = (state: AppStateType) => {
    return state.shopCartPage.cartProduct
}

const couponCode = (state: AppStateType) => {
    return state.shopCartPage.couponCode
}

export const lengthCartProduct = createSelector(productsInCartSelector, productInCart => {
    return productInCart.length;
})

export const subtotalShopCart = createSelector(productsInCartSelector, productInCart => {
    let sum = 0;
    for (let i = 0; i < productInCart.length; i++) {
        sum += +productInCart[i].totalCost
    }
    return sum;
})

export const couponDiscount = createSelector(couponCode, subtotalShopCart, (couponCode, subtotalShopCart) => {
    switch (couponCode) {
        case 'COCKROACH':
            return subtotalShopCart*0.03
        default:
            return 0;
    }
})

export const totalShopCart = createSelector(subtotalShopCart, couponDiscount, (subtotalShopCart, couponDiscount) => {
    return subtotalShopCart - couponDiscount
})

export const productInCart = createSelector(productsInCartSelector, productInCart => {
       return productInCart.map(product => product.id)
})
