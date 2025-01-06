import React from 'react';

function ResponsivePage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center">Responsive Layout</h1>
      <p className="mt-4 text-gray-700">This is a fully responsive layout.</p>
      <div className="grid gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-blue-200 p-4 rounded">Item 1</div>
        <div className="bg-blue-200 p-4 rounded">Item 2</div>
        <div className="bg-blue-200 p-4 rounded">Item 3</div>
        <div className="bg-blue-200 p-4 rounded">Item 4</div>
        <div className="bg-blue-200 p-4 rounded">Item 5</div>
        <div className="bg-blue-200 p-4 rounded">Item 6</div>
      </div>
    </div>
  );
}

export default ResponsivePage;
