const UPDATE_SELECT_COUNTRY_TEXT = 'UPDATE_SELECT_COUNTRY_TEXT';
const UPDATE_SELECT_STATE_TEXT = 'UPDATE_SELECT_STATE_TEXT';
const UPDATE_POSTCODE_TEXT = 'UPDATE_POSTCODE_TEXT';
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
const PRODUCT_DELETE = 'PRODUCT_DELETE';
const ADD_PRODUCT_IN_CART = 'ADD_PRODUCT_IN_CART';

let initialState = {
    cartProduct: [
        // {id: 1, nameProduct: 'Cruise Dual Analog', cost: '250.00', totalCost: '250.00', value: 1, productInCart: true},
        // {id: 2, nameProduct: 'Crown Summit Backpack', cost: '250.00', totalCost: '250.00', value: 1},
        // {id: 3, nameProduct: 'Joust Duffle Bag', cost: '250.00', totalCost: '250.00', value: 1},
    ],
    country: '',
    stateInCountry: '',
    postcode: '',
    subtotal: '',
}

if (initialState.cartProduct.length > 0) {
    initialState.cartProduct[0].size = '80х100'
}
;


const shopCartPageReducer = (state = initialState, action) => {
    switch (action.type) {
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
            let subtotal;
            if (state.cartProduct.length === 0) {
                subtotal = 0;
            } else {
                for (let i = 0; i < state.cartProduct.length; i++) {
                    subtotal = subtotal + Number(state.cartProduct[i].totalCost);
                }
            }

            return {
                ...state,
                cartProduct: state.cartProduct.map(product => {
                        if (product.id === action.productId) {
                            return {
                                ...product,
                                value: action.value,
                                totalCost: action.value * product.cost,
                            }
                        }
                        return product
                    }
                ),
                subtotal: subtotal,
            }
        case PRODUCT_DELETE:
            return {
                ...state,
                cartProduct: state.cartProduct.filter(item => item.id !== action.productId)
            }
        case ADD_PRODUCT_IN_CART:
            debugger
            let product;
            if (state.cartProduct.length === 0) {
                product = [...state.cartProduct, {
                    id: action.id,
                    nameProduct: action.nameProduct,
                    cost: action.cost,
                    totalCost: action.totalCost,
                    value: 1,
                    productInCart: true,
                }]
            } else {
                state.cartProduct.some((array) => {
                    return array.id === action.id
                }) ?
                    product = [...state.cartProduct] :
                    product = [...state.cartProduct, {
                        id: action.id,
                        nameProduct: action.nameProduct,
                        cost: action.cost,
                        totalCost: action.totalCost,
                        value: 1,
                        productInCart: true,
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

export const onSelectCountryActionCreator = (text) => {
    return {
        type: UPDATE_SELECT_COUNTRY_TEXT,
        text: text,
    }
}

export const onSelectStateActionCreator = (text) => {
    return {
        type: UPDATE_SELECT_STATE_TEXT,
        text: text,
    }
}

export const onPostcodeActionCreator = (text) => {
    return {
        type: UPDATE_POSTCODE_TEXT,
        text: text,
    }
}

export const onChangeInput = (value, productId) => {
    return {
        type: CHANGE_INPUT_VALUE,
        value: value,
        productId: productId,
    }
}

export const onProductDelete = (productId) => {
    return {
        type: PRODUCT_DELETE,
        productId,
    }
}

export const addProductInCart = (id, nameProduct, cost, totalCost) => {
    return {
        type: ADD_PRODUCT_IN_CART,
        id, nameProduct, cost, totalCost
    }
}


window.initialState = initialState;

export default shopCartPageReducer;