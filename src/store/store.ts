import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import homePageReducer from "./homePageReducer";
import shopCartPageReducer from "./shopCartPage";
import thunk, {ThunkAction} from "redux-thunk";
import appReducer from "./appReducer";
import headerReducer from "./headerReducer";

let rootReducers = combineReducers({
    homePage: homePageReducer,
    shopCartPage: shopCartPageReducer,
    app: appReducer,
    header: headerReducer
})

let store = createStore(rootReducers, applyMiddleware(thunk))

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

export default store;