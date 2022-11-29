import CakeContainer from "./component/CakeContainer";
import "./App.css";
import NewCakeContainer from "./component/NewCakeContainer";
import UserContainer from "./component/UserContainer";

function App() {
  return (
    <div className="App">
      <CakeContainer />
      <NewCakeContainer />
      <UserContainer />
    </div>
  );
}

export default App;
