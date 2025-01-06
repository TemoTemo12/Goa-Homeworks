import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-6">
      <h2 className="text-2xl font-bold mb-6">My Sidebar</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard/home"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/about"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/contact"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
