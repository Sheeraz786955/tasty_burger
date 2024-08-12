import React from "react";
import {BrowserRouter as Router , Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
   <Router>
   <Routes>
    <Route path="/" element={<Home/>}/>
   </Routes>
   </Router>
  );
}

export default App;
