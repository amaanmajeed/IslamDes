import "./App.css";
import React from 'react';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MoveTop from './Components/MoveTop';
import Inner from './Inner';

import { BrowserRouter as Router } from 'react-router-dom';

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
