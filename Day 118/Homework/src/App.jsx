import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <h1 className="text-4xl sm:text-6xl font-bold mb-4">Welcome to All-in-One Website</h1>
    <p className="text-lg sm:text-xl">Explore everything from one place.</p>
  </div>
);

const About = () => (
  <div className="section bg-yellow-100">
    <h1 className="text-4xl font-bold text-center">About Us</h1>
    <p className="mt-4 text-center text-lg max-w-2xl mx-auto">
      We are passionate about creating dynamic and modern web solutions.
    </p>
  </div>
);

const Contacts = () => (
  <div className="section bg-green-100">
    <h1 className="text-4xl font-bold text-center">Contacts</h1>
    <p className="mt-4 text-center text-lg max-w-2xl mx-auto">
      Reach us at example@mail.com or call us at (123) 456-7890.
    </p>
  </div>
);

const FlyingFishFacts = () => (
  <div className="section bg-blue-100">
    <h1 className="text-4xl font-bold text-center">Flying Fish Facts</h1>
    <p className="mt-4 text-center text-lg max-w-2xl mx-auto">
      Flying fish can glide over water for up to 45 seconds.
    </p>
  </div>
);

const LoginSystem = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-700 to-gray-900 text-white">
      <h1 className="text-4xl font-bold">{isLoggedIn ? 'Welcome Back!' : 'Please Log In'}</h1>
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
      >
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4 flex flex-wrap justify-around items-center shadow-lg sticky top-0 z-50">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/contacts" className="hover:text-blue-400">Contacts</Link>
        <Link to="/flying-fish-facts" className="hover:text-blue-400">Flying Fish</Link>
        <Link to="/login" className="hover:text-blue-400">Login</Link>
      </nav>
      <div className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/flying-fish-facts" element={<FlyingFishFacts />} />
          <Route path="/login" element={<LoginSystem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
