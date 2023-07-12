import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
