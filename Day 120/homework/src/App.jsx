import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Teams from './Pages/Teams';
import Player from './Pages/Player';
import Portfolio from './Pages/portfolio';
import Lions from './Pages/Lions'
import './styles/App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<Player />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/lions" element={<Lions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
