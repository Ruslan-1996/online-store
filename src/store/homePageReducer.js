const UPDATE_NAME_EMAIL = "UPDATE_NAME_EMAIL";

let initialState = {
    product: [
        {id: 1, nameProduct: 'Cruise Dual Analog', cost: '250.00'},
        {id: 2, nameProduct: 'Crown Summit Backpack', cost: '250.00'},
        {id: 3, nameProduct: 'Joust Duffle Bag', cost: '250.00'},
        {id: 4, nameProduct: 'Voyage Yoga Bag', cost: '250.00'},
        {id: 5, nameProduct: 'Compete Track Tote', cost: '250.00'},
        {id: 6, nameProduct: 'Sprite Yoga Companion Kit', cost: '250.00'},
        {id: 7, nameProduct: 'Strive Shoulder Pack', cost: '250.00'},
        {id: 8, nameProduct: 'Impulse Duffle', cost: '250.00'},
    ],
    bestProduct: [

        {id: 1, nameProduct: 'Cruise Dual Analog', cost: '250.00'},
        {id: 2, nameProduct: 'Crown Summit Backpack', cost: '250.00'},
        {id: 3, nameProduct: 'Joust Duffle Bag', cost: '250.00'},
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
//
// window.initialState = initialState;

export default homePageReducer;