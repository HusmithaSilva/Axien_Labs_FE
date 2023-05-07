import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup";
//navigations
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar} from "./components/NavBar";

//app main access point starts here
function App() {
  return (
    //handle routes
    <Router>
      <Navbar />
      <Routes>
        <Route path="dashboard" exact element={<Dashboard/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
