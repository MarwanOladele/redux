import { BUY_CAKE, RESET, SELL_CAKE } from "../action/cakeTypes";

export const initialState = {
  numOfCake: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    case RESET:
      return {
        ...state,
        numOfCake: 0,
      };
    case SELL_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake + 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
