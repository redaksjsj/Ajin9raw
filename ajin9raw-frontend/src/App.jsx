import React from "react";


import Header from "./components/Header";
import Button from "./components/Button";
import Home from "./pages/Home";
import Footer from "./components/Footer"; // Si tu l’as déjà fait
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";


<Route path="/about" element={<About />} />



export default function App() {
  return (
    <>
  
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
  <Footer />
</>

}
