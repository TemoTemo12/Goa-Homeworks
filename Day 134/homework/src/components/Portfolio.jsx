import React from "react";

function Portfolio() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-purple-600">My Portfolio</h1>
      <p className="mt-4 text-gray-700">
        Welcome to my portfolio! Here's what I can do:
      </p>
      <ul className="mt-4 space-y-2">
        <li className="bg-purple-100 p-4 rounded shadow">Web Development</li>
        <li className="bg-purple-100 p-4 rounded shadow">UI/UX Design</li>
        <li className="bg-purple-100 p-4 rounded shadow">React & Tailwind</li>
      </ul>
    </div>
  );
}

export default Portfolio;
