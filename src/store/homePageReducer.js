const UPDATE_NAME_EMAIL = 'UPDATE_NAME_EMAIL';
const TOGGLE_PRODUCT_IN_CART = 'TOGGLE_PRODUCT_IN_CART';

let initialState = {
    product: [
        {id: 1, nameProduct: 'Cruise Dual Analog', cost: '250.00', inCart: false},
        {id: 2, nameProduct: 'Crown Summit Backpack', cost: '250.00', inCart: false},
        {id: 3, nameProduct: 'Joust Duffle Bag', cost: '250.00', inCart: false},
        {id: 4, nameProduct: 'Voyage Yoga Bag', cost: '250.00', inCart: false},
        {id: 5, nameProduct: 'Compete Track Tote', cost: '250.00', inCart: false},
        {id: 6, nameProduct: 'Sprite Yoga Companion Kit', cost: '250.00', inCart: false},
        {id: 7, nameProduct: 'Strive Shoulder Pack', cost: '250.00', inCart: false},
        {id: 8, nameProduct: 'Impulse Duffle', cost: '250.00', inCart: false},
    ],
    bestProduct: [
        {id: 1, nameProduct: 'Cruise Dual Analog', cost: '250.00', inCart: false},
        {id: 2, nameProduct: 'Crown Summit Backpack', cost: '250.00', inCart: false},
        {id: 3, nameProduct: 'Joust Duffle Bag', cost: '250.00', inCart: false},
    ],
    nameEmail: '',
}

initialState.bestProduct[0].size = '300х450';



const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NAME_EMAIL:
            return {
                ...state,
                nameEmail: action.text,
            };
        case TOGGLE_PRODUCT_IN_CART:
            return {
                ...state,
                product: state.product.map(product => product.id === action.id ? (
                    product.inCart === false ?
                        {...product, inCart: true}:  {...product, inCart: false} ): product),
                bestProduct: state.bestProduct.map(product => product.id === action.id ? (
                    product.inCart === false ?
                    {...product, inCart: true}:  {...product, inCart: false} ): product)
            }
        default:
            return state;
    }
}


export const onNameEmailActionCreator = (text) => {
    return {
        type: UPDATE_NAME_EMAIL,
        text: text,
    }
}

export const onToggleProductInCart = (id) => {
    return {
        type: TOGGLE_PRODUCT_IN_CART,
        id
    }
}


//
// window.initialState = initialState;

export default homePageReducer;