import React from 'react';
import "./styles/styles.css";
// import { HashRouter as Router } from "react-router-dom";
import AnimatedRoutes from './AnimatedRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>

      <Navbar />
      <AnimatedRoutes />
      <Footer />

    </>
  );
}

export default App;
