const UPDATE_SELECT_COUNTRY_TEXT = 'UPDATE_SELECT_COUNTRY_TEXT';
const UPDATE_SELECT_STATE_TEXT = 'UPDATE_SELECT_STATE_TEXT';
const UPDATE_POSTCODE_TEXT = 'UPDATE_POSTCODE_TEXT';
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
const PRODUCT_DELETE ='PRODUCT_DELETE';

let initialState = {
    cartProduct: [
        {id: 1, nameProduct: 'Cruise Dual Analog', cost: '250.00', totalCost: '250.00', value: 1},
        {id: 2, nameProduct: 'Crown Summit Backpack', cost: '250.00', totalCost: '250.00', value: 1},
        {id: 3, nameProduct: 'Joust Duffle Bag', cost: '250.00', totalCost: '250.00', value: 1},
    ],
    country: '',
    stateInCountry: '',
    postcode: '',
}

initialState.cartProduct[0].size = '80х100';



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
        return {
            ...state,
            cartProduct: state.cartProduct.map(product => {
                if (product.id === action.productId) {
                    return {...product,
                        value: action.value,
                        totalCost: action.value* product.cost,
                    }
                }
                return product
            })
        }
        case PRODUCT_DELETE:
            let i = state.cartProduct.findIndex(n => n.id === action.productId+1)
            return {
                ...state,
                cartProduct: state.cartProduct.splice(i, 1)
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


window.initialState = initialState;

export default shopCartPageReducer;