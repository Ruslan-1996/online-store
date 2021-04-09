const UPDATE_SELECT_COUNTRY_TEXT = 'online-store/shop-cart/UPDATE_SELECT_COUNTRY_TEXT';
const UPDATE_SELECT_STATE_TEXT = 'online-store/shop-cart/UPDATE_SELECT_STATE_TEXT';
const UPDATE_POSTCODE_TEXT = 'online-store/shop-cart/UPDATE_POSTCODE_TEXT';
const CHANGE_INPUT_VALUE = 'online-store/shop-cart/CHANGE_INPUT_VALUE';
const PRODUCT_DELETE = 'online-store/shop-cart/PRODUCT_DELETE';
const ADD_PRODUCT_IN_CART = 'online-store/shop-cart/ADD_PRODUCT_IN_CART';
const UPDATE_COUPON_CODE = 'online-store/shop-cart/UPDATE_COUPON_CODE';

export type CartProductType = {
    id: number
    name: string
    cost: number
    totalCost: number
    value: string
    size?: string
}

let initialState = {
    cartProduct: [] as Array<CartProductType>,
    country: '',
    stateInCountry: '',
    postcode: '',
    couponCode: '',
}

type InitialState = typeof initialState

const shopCartPageReducer = (state = initialState, action: ActionType): InitialState => {
    switch (action.type) {
        case UPDATE_COUPON_CODE:
            return {
                ...state,
                couponCode: action.text.toUpperCase()
            }
        case UPDATE_SELECT_COUNTRY_TEXT:
            return {
                ...state,
                country: action.text,
            }
        case UPDATE_SELECT_STATE_TEXT:
            return {
                ...state,
                stateInCountry: action.text,
            }
        case UPDATE_POSTCODE_TEXT:
            return {
                ...state,
                postcode: action.text,
            }
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                cartProduct: state.cartProduct.map(product => {
                        if (product.id === action.productId) {
                            return {
                                ...product,
                                value: action.value,
                                totalCost: +action.value * product.cost,
                            }
                        }
                        return product
                    }
                ),
            }
        case PRODUCT_DELETE:
            return {
                ...state,
                cartProduct: state.cartProduct.filter(item => item.id !== action.productId)
            }
        case ADD_PRODUCT_IN_CART:
            let product;
            if (state.cartProduct.length === 0) {
                product = [{
                    id: action.id,
                    name: action.name,
                    cost: action.cost,
                    totalCost: action.cost,
                    value: '1',
                    size: '80х100'
                }]
            } else {
                product = [...state.cartProduct, {
                    id: action.id,
                    name: action.name,
                    cost: action.cost,
                    totalCost: action.cost,
                    value: '1',
                }]
            }

            return {
                ...state,
                cartProduct: product,
            }
        default:
            return state;
    }
}

type ActionType =
    OnSelectCountryActionCreatorType
    | OnSelectStateActionCreatorType
    | OnPostCodeActionCreatorType
    | OnChangeInputType
    | OnProductDeleteType
    | AddProductInCartType
    | onSelectCouponCodeACType


type onSelectCouponCodeACType = {
    type: typeof UPDATE_COUPON_CODE
    text: string
}

export const onSelectCouponCodeAC = (text: string): onSelectCouponCodeACType => {
    return {
        type: UPDATE_COUPON_CODE,
        text
    }
}

type OnSelectCountryActionCreatorType = {
    type: typeof UPDATE_SELECT_COUNTRY_TEXT
    text: string
}

export const onSelectCountryActionCreator = (text: string): OnSelectCountryActionCreatorType => {
    return {
        type: UPDATE_SELECT_COUNTRY_TEXT,
        text: text,
    }
}

type OnSelectStateActionCreatorType = {
    type: typeof UPDATE_SELECT_STATE_TEXT
    text: string
}

export const onSelectStateActionCreator = (text: string): OnSelectStateActionCreatorType => {
    return {
        type: UPDATE_SELECT_STATE_TEXT,
        text: text,
    }
}

type OnPostCodeActionCreatorType = {
    type: typeof UPDATE_POSTCODE_TEXT,
    text: string,
}

export const onPostCodeActionCreator = (text: string): OnPostCodeActionCreatorType => {
    return {
        type: UPDATE_POSTCODE_TEXT,
        text: text,
    }
}

type OnChangeInputType = {
    type: typeof CHANGE_INPUT_VALUE,
    value: string,
    productId: number,
}

export const onChangeInput = (value: string, productId: number): OnChangeInputType => {
    return {
        type: CHANGE_INPUT_VALUE,
        value: value,
        productId: productId,
    }
}

type OnProductDeleteType = {
    type: typeof PRODUCT_DELETE,
    productId: number
}

export const onProductDelete = (productId: number): OnProductDeleteType => {
    return {
        type: PRODUCT_DELETE,
        productId,
    }
}

type AddProductInCartType = {
    type: typeof ADD_PRODUCT_IN_CART
    id: number
    name: string
    cost: number
}

export const addProductInCart = (id: number, name: string, cost: number): AddProductInCartType => {
    return {
        type: ADD_PRODUCT_IN_CART,
        id, name, cost
    }
}

export default shopCartPageReducer;