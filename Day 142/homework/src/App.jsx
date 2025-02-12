import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Add padding top to account for the fixed header */}
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;