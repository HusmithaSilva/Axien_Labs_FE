import logo from "./logo.svg";
import "./App.css";
// import rocketImg from './assets/rocket.png';
// import { Signup } from "./components/Signup";
import { Login } from "./components/Login/Login";
import Draggable from "react-draggable";
import { DraggableCore } from "react-draggable";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="">
      <div className="">
        {/* <Login /> */}
        <Dashboard />
      </div>
      <div className="">
        {/* <img className="img-fluid w-100" src={rocketImg} alt=""/> */}
      </div>
    </div>
  );
}

export default App;
