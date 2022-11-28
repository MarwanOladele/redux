import { BUY_CAKE, RESET, SELL_CAKE } from "./cakeTypes";

export const buyCake = (num1) => {
  return {
    type: BUY_CAKE,
    payload: num1
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
}; 

export const sellCake = () => {
  return {
    type: SELL_CAKE,
  };
};