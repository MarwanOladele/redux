const BUY_CAKE = "BUY_CAKE";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
};

const initialState = {
  numOfCake: 10,
};

const reducerFn = (state = initialState, action) => {
  if (action.type === BUY_CAKE) {
    return {
      ...state,
      numOfCake: state.numOfCake - 1,
    };
  }
  return state;
};
