import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
const App = ()=>{
    return(
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="About" Component={About}></Route>
            <Route path="Contact" Component={Contact}></Route>
        </Routes>
        </BrowserRouter>
        
    )
}

export default App;