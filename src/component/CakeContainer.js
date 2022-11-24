import React from "react";
import { useSelector } from "react-redux";

const CakeContainer = () => {
  const numOfCake = useSelector((state) => state.cakeReducer.numOfCake);
  return (
    <div>
      <h2>{numOfCake}</h2>
      <button>Buy Cakes</button>
    </div>
  );
};

export default CakeContainer;
