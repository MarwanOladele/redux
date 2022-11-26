import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, reset, sellCake } from "../redux/action/cakeAction";

const CakeContainer = () => {
  const numOfCake = useSelector((state) => state.cakeReducer.numOfCake);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{numOfCake}</h2>
      <h2>{numOfCake}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(sellCake())}>Sell Cakes</button>
    </div>
  );
};

export default CakeContainer;
