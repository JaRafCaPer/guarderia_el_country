import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from "./components/Home/Home.jsx";
function App() {
  return (
  <div className='App'>
    <BrowserRouter>
        <Routes>

        </Routes>
        
        <Home/>
        
      </BrowserRouter>
    
  
  </div>
  );
}

export default App;
