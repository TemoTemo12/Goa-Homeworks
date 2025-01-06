import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Football from './components/Footbal';
import Movie from './components/Movie';
import GuineaPigs from './components/GuineaPigs';
import Apple from './components/Apple';
import Samsung from './components/Samsung';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
        
        {/* Header Section */}
        <header className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide">Explore Fascinating Topics</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Dive into the world of Football, Movies, Guinea Pigs, and two of the biggest tech companies, Apple and Samsung.
          </p>
        </header>

        {/* Navigation Section */}
        <nav className="bg-indigo-500 py-4 text-white shadow-md">
          <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8">
            <li>
              <Link to="/" className="hover:bg-indigo-600 px-4 py-2 rounded-lg transition">Football</Link>
            </li>
            <li>
              <Link to="/movie" className="hover:bg-indigo-600 px-4 py-2 rounded-lg transition">Favorite Movie</Link>
            </li>
            <li>
              <Link to="/guinea-pigs" className="hover:bg-indigo-600 px-4 py-2 rounded-lg transition">Guinea Pigs</Link>
            </li>
            <li>
              <Link to="/apple" className="hover:bg-indigo-600 px-4 py-2 rounded-lg transition">Apple Company</Link>
            </li>
            <li>
              <Link to="/samsung" className="hover:bg-indigo-600 px-4 py-2 rounded-lg transition">Samsung Company</Link>
            </li>
          </ul>
        </nav>

        {/* Main Content Section */}
        <main className="p-6 flex-grow">
          <div className="container mx-auto max-w-4xl">
            <Routes>
              <Route path="/" element={<Football />} />
              <Route path="/movie" element={<Movie />} />
              <Route path="/guinea-pigs" element={<GuineaPigs />} />
              <Route path="/apple" element={<Apple />} />
              <Route path="/samsung" element={<Samsung />} />
            </Routes>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-gray-300 text-center p-4">
          <p className="text-sm md:text-base">&copy; 2024 My Informational Site. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
