import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center mt-10 space-y-5">
      <h1 className="text-3xl font-bold">Counter Project</h1>
      <h2 className="text-2xl">{count}</h2>
      <div className="space-x-4">
        <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white px-4 py-2 rounded">+</button>
        <button onClick={() => setCount(count - 1)} className="bg-red-500 text-white px-4 py-2 rounded">-</button>
      </div>
    </div>
  );
}

export default Counter;
