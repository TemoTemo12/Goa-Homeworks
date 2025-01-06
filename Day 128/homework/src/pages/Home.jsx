import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const Dashboard = () => {
  return (
    <div className="flex">
      <aside className="bg-gray-800 text-white w-64 min-h-screen p-6">
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/dashboard/home" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/dashboard/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-grow p-6 bg-gray-100">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
