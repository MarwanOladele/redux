const redux = require('redux')
const createStore =  redux.createStore

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


const initialState = {
  numOfCake: 10,
  numOfIcecream: 20,
};

const reducerFn = (state = initialState, action) => {
  if (action.type === BUY_CAKE) {
    return {
      ...state,
      numOfCake: state.numOfCake - 1,
    };
  }
  if (action.type === BUY_ICECREAM) {
    return {
      ...state,
      numOfIcecream: state.numOfIcecream - 1,
    };
  }
  return state;
};

const store = createStore(reducerFn)
console.log('initial state', store.getState());
const unsubsribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
unsubsribe()
