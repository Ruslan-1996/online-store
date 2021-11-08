import {getCategories} from "./headerReducer";

const INITIALIZED_SUCCESS = 'online-store/appReducer/INITIALIZED_SUCCESS'

let initialState = {
    inizializedApp: false,
}

type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: InitializedSuccessType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                inizializedApp: true
            }
        default:
            return {...state}
    }
}

type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessType => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}

export const initializedAPP = () => {
    return (dispatch: any) =>
    {
        const promiseCategories = dispatch(getCategories())
        Promise.all([promiseCategories]).then(()=> {
            dispatch(initializedSuccess())
        })
    }
}

export default appReducer
