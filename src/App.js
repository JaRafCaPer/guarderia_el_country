import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Footer from "./components/footer/footer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
function App() {
  return (
  <div className='App'>
    <BrowserRouter>
        <NavBar />
        <Routes>

        </Routes>
        <Footer/>
      </BrowserRouter>
    
  
  </div>
  );
}

export default App;
