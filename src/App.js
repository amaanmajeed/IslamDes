import './App.css';
// import Loader from './Components/Loader';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MoveTop from './Components/MoveTop';
import Inner from './Inner';
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
// testing 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        

        <Inner />
        
        <Footer />
        <MoveTop />
    </Router>
    </>
  );
}

export default App;
