// src/components/Counter/Counter.jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center my-10">
      <h2 className="text-2xl font-semibold">Counter: {count}</h2>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
