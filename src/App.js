import React from "react";
import {BrowserRouter as Router , Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
