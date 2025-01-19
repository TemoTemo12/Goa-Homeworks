import React from "react";

function FootballScore() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-red-600">Football Score Table</h1>
      <table className="mt-4 table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Team</th>
            <th className="border border-gray-300 p-2">Wins</th>
            <th className="border border-gray-300 p-2">Losses</th>
            <th className="border border-gray-300 p-2">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Team A</td>
            <td className="border border-gray-300 p-2">10</td>
            <td className="border border-gray-300 p-2">2</td>
            <td className="border border-gray-300 p-2">30</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Team B</td>
            <td className="border border-gray-300 p-2">8</td>
            <td className="border border-gray-300 p-2">4</td>
            <td className="border border-gray-300 p-2">24</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FootballScore;
