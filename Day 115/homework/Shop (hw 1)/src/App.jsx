import React from 'react';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import TestimonialsPage from './components/Tetimonials';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container mx-auto p-6 space-y-10">
      <HomePage />
      <ServicesPage />
      <TestimonialsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
