import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Mern from "./Pages/Mern";
import Marn from "./Pages/Marn";
import Nuxt from "./Pages/Nuxt";
import Remix from "./Pages/Remix";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary text-white">
        {/* Header */}
        <header className="bg-transparent text-white p-6 shadow-custom">
          <nav className="flex justify-between items-center max-w-7xl mx-auto">
            <h1 className="text-3xl font-extrabold">Fullstack Guide</h1>
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="hover:text-secondary transition">Home</Link>
              </li>
              <li>
                <Link to="/mern" className="hover:text-secondary transition">MERN</Link>
              </li>
              <li>
                <Link to="/marn" className="hover:text-secondary transition">MARN</Link>
              </li>
              <li>
                <Link to="/nuxt" className="hover:text-secondary transition">Nuxt</Link>
              </li>
              <li>
                <Link to="/remix" className="hover:text-secondary transition">Remix</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="bg-hero-gradient text-center py-16 px-6 md:px-12">
          <h2 className="text-4xl font-bold mb-4">Master Fullstack Development</h2>
          <p className="text-lg md:text-xl mb-8">
            Learn cutting-edge web technologies that power modern web applications.
          </p>
          <Link to="/" className="bg-secondary text-white py-2 px-6 rounded-full text-lg hover:bg-accent transition-all">
            Get Started
          </Link>
        </section>

        {/* Main Content */}
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mern" element={<Mern />} />
            <Route path="/marn" element={<Marn />} />
            <Route path="/nuxt" element={<Nuxt />} />
            <Route path="/remix" element={<Remix />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-6 text-center">
          <div className="space-x-6">
            <a href="#" className="hover:text-secondary transition">Facebook</a>
            <a href="#" className="hover:text-secondary transition">Instagram</a>
            <a href="#" className="hover:text-secondary transition">Twitter</a>
          </div>
          <p className="mt-4">&copy; 2024 Fullstack Guide</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
