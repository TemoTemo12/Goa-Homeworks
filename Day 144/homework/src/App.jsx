import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import Portfolio from './components/Portfolio';
import SamsungWatch from './components/SamsungWatch';
import Documentary from './components/Documentary';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/programming" element={<News />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/samsung-watch" element={<SamsungWatch />} />
            <Route path="/documentary" element={<Documentary />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
