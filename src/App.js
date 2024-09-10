import { useContext } from "react";
import "./App.css";
// import Home from "./component/Home";
import SearchBox from "./component/SearchBox/SearchBox";
import FoodContext from "./component/context/FoodContext";
import Food from "./component/Food/Food";

function App() {
  const {input} = useContext(FoodContext)
  return (
    <div className="App">
      <SearchBox/>
      {input !== "" ? <></> : <Food/>}
    </div>
  );
}

export default App;
