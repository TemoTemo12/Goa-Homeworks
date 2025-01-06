import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import History from './components/History';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <History />
      <Gallery />
    </div>
  );
}

export default App;
