import {homePageAPI, homePageCategories} from "../api/homePageAPI";

const UPDATE_NAME_EMAIL = 'online-store/home-page/UPDATE_NAME_EMAIL';
const SET_ASSESSMENT = 'online-store/home-page/SET_ASSESSMENT';
const GET_CATEGORIES = 'online-store/home-page/GET_CATEGORIES'

export type ProductType = {
    id: number
    name: string
    cost: number
    assessment: number
    size?: string | undefined
}

let initialState = {
    product: [
        {id: 1, name: 'Cruise Dual Analog', cost: 250.00, assessment: 4},
        {id: 2, name: 'Crown Summit Backpack', cost: 250.00, assessment: 4},
        {id: 3, name: 'Joust Duffle Bag', cost: 250.00, assessment: 4},
        {id: 4, name: 'Voyage Yoga Bag', cost: 250.00, assessment: 4},
        {id: 5, name: 'Compete Track Tote', cost: 250.00, assessment: 4},
        {id: 6, name: 'Sprite Yoga Companion Kit', cost: 250.00, assessment: 4},
        {id: 7, name: 'Strive Shoulder Pack', cost: 250.00, assessment: 4},
        {id: 8, name: 'Impulse Duffle', cost: 250.00, assessment: 4},
    ] as Array<ProductType>,
    bestProduct: [
        {id: 1, name: 'Cruise Dual Analog', cost: 250.00, assessment: 4},
        {id: 2, name: 'Crown Summit Backpack', cost: 250.00, assessment: 4},
        {id: 3, name: 'Joust Duffle Bag', cost: 250.00, assessment: 4},
    ] as Array<ProductType>,
    nameEmail: '',
}

initialState.bestProduct[0].size = '300Х450'

type InitialStateType = typeof initialState

const homePageReducer = (state = initialState, action: HomePageReducerType): InitialStateType => {
    switch (action.type) {
        case UPDATE_NAME_EMAIL:
            return {
                ...state,
                nameEmail: action.text,
            };
        case SET_ASSESSMENT:
            return {
                ...state,
                product: state.product.map(product => product.id === action.id ?
                    {...product, assessment: action.assessment} : product),
                bestProduct: state.bestProduct.map(product => product.id === action.id ?
                    {...product, assessment: action.assessment} : product),
            }
        default:
            return state;
    }
}


type HomePageReducerType = OnNameEmailActionCreatorType | SetAssessmentType

type OnNameEmailActionCreatorType = {
    type: typeof UPDATE_NAME_EMAIL
    text: string
}


export const onNameEmailActionCreator = (text: string): OnNameEmailActionCreatorType => {
    return {
        type: UPDATE_NAME_EMAIL,
        text: text,
    }
}


type SetAssessmentType = {
    type: typeof SET_ASSESSMENT,
    id: number
    assessment: number
}

export const setAssessment = (assessment: number, id: number): SetAssessmentType => {
    return {
        type: SET_ASSESSMENT,
        assessment,
        id
    }
}

export default homePageReducer;