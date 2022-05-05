const counterReducer = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + action.payload;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state
};

export default counterReducer;
