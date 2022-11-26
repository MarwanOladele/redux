import { BUY_CAKE, RESET, SELL_CAKE } from "./cakeTypes";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
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