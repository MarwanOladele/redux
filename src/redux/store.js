import { createStore, combineReducers } from "redux";
import cakeReducer from "./reducer/cakeReducer";

const allReducer  = combineReducers({
    cakeReducer
})

const store = createStore(allReducer)  

export default store