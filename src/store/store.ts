import {combineReducers, createStore} from "redux";
import homePageReducer from "./homePageReducer";
import shopCartPageReducer from "./shopCartPage";

let rootReducers = combineReducers({
    homePage: homePageReducer,
    shopCartPage: shopCartPageReducer,
})


let store = createStore(rootReducers)

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
window.store = store;

export default store;