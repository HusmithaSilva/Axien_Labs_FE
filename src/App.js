import logo from "./logo.svg";
import "./App.css";
// import rocketImg from './assets/rocket.png';
import { Signup } from "./components/Signup";

function App() {
  return (
    <div className="">
      <div className="">
        <Signup />
      </div>
      <div className="">
        {/* <img className="img-fluid w-100" src={rocketImg} alt=""/> */}
      </div>
    </div>
  );
}

export default App;
