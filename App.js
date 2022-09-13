import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Home from "./components/Home";
import Navabar from "./components/Navabar";

function App() {
  return (
    <div className="App">
      <Navabar/>
      <Home/>
    </div>
  );
}

export default App;
