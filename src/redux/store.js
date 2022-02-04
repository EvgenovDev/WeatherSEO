import {applyMiddleware, createStore} from "redux";
import weatherReducer from "./../redux/weather/weatherReducer"
import thunkMiddleware from "redux-thunk";

let store = createStore(weatherReducer, applyMiddleware(thunkMiddleware));

export default store;