import { BUY_CAKE, RESET } from "./cakeTypes";

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