import {homePageAPI} from "../api/homePageAPI";
import {BaseThunkType} from "./store";

const GET_CATEGORIES = 'online-store/home-page/GET_CATEGORIES'

export type CategoriesType = {
    id: number
    name: string
}

let initialState = {
    categories: [] as Array<CategoriesType>,
}

type InitialStateType = typeof initialState

const headerReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };
        default:
            return state;
    }
}

type ActionType =  GetCategoriesSuccessType

type ThunkType = BaseThunkType<ActionType>

type GetCategoriesSuccessType = {
    type: typeof GET_CATEGORIES,
    categories: Array<CategoriesType>
}

export const getCategoriesSuccess = (categories: Array<CategoriesType>): GetCategoriesSuccessType => {
    return {
        type: GET_CATEGORIES,
        categories,
    }
}

export const getCategories = (): ThunkType => {
    return async (dispatch) => {
        let response = await homePageAPI.categories();
        dispatch(getCategoriesSuccess(response.data))
    }
}

export default headerReducer;