import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import cartReducer from "./Cart";
import categoriesReducer from "./Categories";
import { thunk } from "redux-thunk";

const reducer = combineReducers({
    cart: cartReducer,
    categories: categoriesReducer
})
const store = createStore(reducer, applyMiddleware(thunk));


export default store;