import { createStore, combineReducers, applyMiddleware } from "redux";
import cakeReducer from "./reducer/cakeReducer";
import UserReducer from "./reducer/userReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
 
const allReducer  = combineReducers({
    cakeReducer,
    UserReducer 
})

const store = createStore(allReducer,  composeWithDevTools(applyMiddleware(thunk)))

export default store