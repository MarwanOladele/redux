const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore =  redux.createStore
const combineReducers  = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const buyCake = () => {
  return { 
    type: BUY_CAKE,
    info: "First Redux Action",
  };
};

const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
    info: "First Redux Action",
  };
};


const initialCakeState = {
  numOfCake: 10,
};

const initialIceCreamState = {
  numOfIcecream: 20,
};

const cakeReducerFn = (state = initialCakeState, action) => {
  if (action.type === BUY_CAKE) {
    return {
      ...state,
      numOfCake: state.numOfCake - 1,
    };
  }
  return state;
};

const iceCreamReducerFn = (state = initialIceCreamState, action) => {
  if (action.type === BUY_ICECREAM) {
    return {
      ...state,
      numOfIcecream: state.numOfIcecream - 1,
    };
  }
  return state;
};

const rootReducer = combineReducers({
  cake: cakeReducerFn,
  iceCream: iceCreamReducerFn,
});
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initial state', store.getState());
const unsubsribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
unsubsribe()
