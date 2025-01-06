import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Napoleon from './Pages/Napoleon';
import Constantinople from './Pages/Constantinopole';
import Erekle from './Pages/Erekle';
import David from './Pages/David';
import Vakhtang from './Pages/Vakhtang';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Napoleon />} />
            <Route path="/constantinople" element={<Constantinople />} />
            <Route path="/erekle" element={<Erekle />} />
            <Route path="/david" element={<David />} />
            <Route path="/vakhtang" element={<Vakhtang />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
