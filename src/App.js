import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, toggle } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.islogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
<br />
      {isLogged && <h3>valuable information I shouldn't see</h3>}
      <button onClick={()=> dispatch(toggle())}>toggle</button>
    </div>
  );
}

export default App;
