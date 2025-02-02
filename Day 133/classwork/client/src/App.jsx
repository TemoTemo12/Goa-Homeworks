import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="text-center p-10 bg-gray-800 rounded-xl shadow-lg text-white">
        <h1 className="text-4xl font-semibold mb-4">{message}</h1>
        <p className="text-lg">Hello, World! server is running :) </p>
      </div>
    </div>
  );
}

export default App;
