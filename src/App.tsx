import React from 'react';
import "./styles/styles.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import AnimatedRoutes from './AnimatedRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//typescript practicing
let name: string;
name = "hey";

function App() {
  return (
    <Router>

      <Navbar />
      <AnimatedRoutes />
      <Footer />

    </Router>
  );
}

export default App;
