import logo from "./logo.svg";
import "./App.css";
import Draggable from "react-draggable";
import { DraggableCore } from "react-draggable";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup";
//navigations
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar} from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard" exact element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>

    // <div className="">
    //   <div className="">
    //     {/* <Login /> */}
    //     <Dashboard />
    //   </div>
    //   <div className="">
    //     {/* <img className="img-fluid w-100" src={rocketImg} alt=""/> */}
    //   </div>
    // </div>
  );
}

export default App;
