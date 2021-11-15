import {homePageAPI} from "../api/homePageAPI";
import {BaseThunkType} from "./store";

const UPDATE_NAME_EMAIL = 'online-store/home-page/UPDATE_NAME_EMAIL';
const SET_ASSESSMENT = 'online-store/home-page/SET_ASSESSMENT';
const SET_PRODUCTS_SUCCESS_TYPE = 'online-store/home-page/SET_PRODUCTS_SUCCESS_TYPE'
const TOGGLE_PRELOADER = 'online-store/home-page/TOGGLE_PRELOADER'

export type ProductType = {
    id: number,
    name: string,
    price: number,
    image: string,
    assessment: number,
    size?: string
}

let initialState = {
    product: [] as Array<ProductType>,
    bestProduct: [] as Array<ProductType>,
    nameEmail: '',
    isPreloader: false,
}

type InitialStateType = typeof initialState

const homePageReducer = (state = initialState, action: ActionType): InitialStateType => {
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
        case SET_PRODUCTS_SUCCESS_TYPE:
            return {
                ...state,
                product: [...action.products],
                bestProduct: [action.products[0], action.products[1], action.products[2]]
            }
        case TOGGLE_PRELOADER:
            return {
                ...state,
                isPreloader: action.preloader
            }
        default:
            return state;
    }
}

type ActionType = OnNameEmailActionCreatorType | SetAssessmentType | SetProductsSuccessType | SetPreloaderToggleType

type ThunkType = BaseThunkType<ActionType>

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

type SetPreloaderToggleType = {
    type: typeof TOGGLE_PRELOADER
    preloader: boolean
}

export const setPreloaderToggle = (preloader: boolean): SetPreloaderToggleType => ({
    type: TOGGLE_PRELOADER,
    preloader
})


type SetProductsSuccessType = {
    type: typeof SET_PRODUCTS_SUCCESS_TYPE
    products: Array<ProductType>
}

const setProductsSuccess = (products: Array<ProductType>): SetProductsSuccessType => {
    return {
        type: SET_PRODUCTS_SUCCESS_TYPE,
        products
    }
}

export const setProducts = (categories: number): ThunkType => {
    return async (dispatch) => {
        dispatch(setPreloaderToggle(true))
        const response = await homePageAPI.products(categories)
        dispatch(setProductsSuccess(response))
        dispatch(setPreloaderToggle(false))
    }
}

export default homePageReducer;
