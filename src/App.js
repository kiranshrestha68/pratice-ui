import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import Slider from "./components/image-slider/Slider";
// import Topbar from "./components/topbar/Topbar";
import { BrowserRouter, Switch,} from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
         
          <Home />
          {/* <Slider /> */}
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
