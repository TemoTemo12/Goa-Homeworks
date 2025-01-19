import React from "react";

function BelgianBeer() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-yellow-600">Belgian Beer</h1>
      <p className="mt-4 text-gray-700">
        Belgium is famous for its wide variety of beers, from strong ales to fruity lambics.
      </p>
      <ul className="mt-4 space-y-2">
        <li className="bg-yellow-100 p-4 rounded shadow">1. Trappist Beers</li>
        <li className="bg-yellow-100 p-4 rounded shadow">2. Lambics</li>
        <li className="bg-yellow-100 p-4 rounded shadow">3. Witbier</li>
      </ul>
    </div>
  );
}

export default BelgianBeer;
