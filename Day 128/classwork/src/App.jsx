import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Habitat from './components/Habitat';
import Conservation from './components/conversation';
import Footer from './components/footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <About />
      <Habitat />
      <Conservation />
      <Footer />
    </div>
  );
}

export default App;
