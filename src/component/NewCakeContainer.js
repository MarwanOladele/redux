import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, reset, sellCake } from "../redux/action/Cake/cakeAction";

const NewCakeContainer = () => {
  const numOfCake = useSelector((state) => state.cakeReducer.numOfCake);
  const dispatch = useDispatch();

  const [num, setNum] = useState(1);

  return (
    <div>
      <h2>{numOfCake}</h2>
      <h2>{numOfCake}</h2>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => dispatch(buyCake(num))}>Buy {num} Cakes</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(sellCake())}>Sell Cakes</button>
    </div>
  );
};

export default NewCakeContainer;
