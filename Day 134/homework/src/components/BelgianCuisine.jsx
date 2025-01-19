import React from "react";

function BelgianCuisine() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600">Belgian Cuisine</h1>
      <p className="mt-4 text-gray-700">
        Discover the richness of Belgian cuisine, from waffles to chocolate and hearty stews!
      </p>
      <ul className="mt-4 space-y-2">
        <li className="bg-gray-100 p-4 rounded shadow">1. Belgian Waffles</li>
        <li className="bg-gray-100 p-4 rounded shadow">2. Moules-Frites</li>
        <li className="bg-gray-100 p-4 rounded shadow">3. Waterzooi</li>
      </ul>
    </div>
  );
}

export default BelgianCuisine;
