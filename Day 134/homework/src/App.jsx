import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BelgianCuisine from "./components/BelgianCuisine";
import BelgianBeer from "./components/BelgianBeer";
import FreeTheme from "./components/FreeTheme";
import Portfolio from "./components/Portfolio";
import FootballScore from "./components/FootballScore";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-blue-500 text-white p-4">
          <ul className="flex space-x-4 justify-center">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/cuisine" className="hover:underline">Belgian Cuisine</a></li>
            <li><a href="/beer" className="hover:underline">Belgian Beer</a></li>
            <li><a href="/free" className="hover:underline">Free Theme</a></li>
            <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="/football" className="hover:underline">Football Score</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine" element={<BelgianCuisine />} />
          <Route path="/beer" element={<BelgianBeer />} />
          <Route path="/free" element={<FreeTheme />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/football" element={<FootballScore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
