import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx"

import Home from "./components/Home/Home.jsx";
import Conocenos from "./components/Conocenos/Conocenos.jsx";
function App() {
  return (
  <div className='App'>
    <BrowserRouter>
        <Routes>

        </Routes>
        <NavBar/>
        <Conocenos/>
        <Footer/>
      </BrowserRouter>
    
  
  </div>
  );
}

export default App;
