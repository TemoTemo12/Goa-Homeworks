// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Counter from './components/Counter/Counter';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Counter />
    </div>
  );
}

export default App;
