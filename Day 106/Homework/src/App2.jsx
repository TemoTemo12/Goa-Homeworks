import React from 'react';

const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500'];
const texts = ['Red Block', 'Green Block', 'Blue Block'];

function App() {
  return (
    <div className="flex flex-col items-center space-y-4">
      {colors.map((color, index) => (
        <div key={index} className={`${color} text-white p-6 rounded-lg shadow-lg`}>
          <h2 className="text-2xl font-bold">{texts[index]}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
