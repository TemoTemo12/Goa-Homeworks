import React from 'react';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-6">Forms</h1>
      
      <div className="space-y-6">
        <div className="w-full max-w-sm mx-auto p-4 bg-gray-800 rounded-lg shadow-md">
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white">Button</button>
        </div>
        
        <div className="w-full max-w-sm mx-auto p-4 bg-gray-800 rounded-lg shadow-md">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
            <span>Checkbox</span>
          </div>
        </div>
        
        <div className="w-full max-w-sm mx-auto p-4 bg-gray-800 rounded-lg shadow-md">
          <select className="w-full py-2 px-4 bg-gray-700 border border-gray-600 rounded-lg text-white">
            <option>Jocelyn</option>
            <option>Jonathan</option>
            <option>Josh</option>
          </select>
        </div>
        
        <div className="w-full max-w-sm mx-auto p-4 bg-gray-800 rounded-lg shadow-md">
          <textarea className="w-full py-2 px-4 bg-gray-700 border border-gray-600 rounded-lg text-white" placeholder="Description"></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
