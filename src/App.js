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
        <Route path="/https://main--candid-cocada-ab870b.netlify.app/dashboard" exact element={<Dashboard/>} />
        <Route path="/https://main--candid-cocada-ab870b.netlify.app/login" element={<Login/>} />
        <Route path="/https://main--candid-cocada-ab870b.netlify.app/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
