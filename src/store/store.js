import {combineReducers, createStore} from "redux";
import homePageReducer from "./homePageReducer";
import shopCartPageReducer from "./shopCartPage";

let reducers = combineReducers({
    homePage: homePageReducer,
    shopCartPage: shopCartPageReducer,
})


let store = createStore(reducers)

window.store = store;

export default store;