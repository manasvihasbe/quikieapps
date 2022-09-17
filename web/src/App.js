import React from "react";
import "./App.css";
import Bitcoin from "./component/Bitcoin";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import View from "./component/View";

function App() {
  return (
     
    <Router>
    <Routes>
    <Route path="/" exact element={<Bitcoin/>}/>
    <Route path="/view" element={<View/>}/>
    </Routes>
    </Router>
  );
}

export default App;
