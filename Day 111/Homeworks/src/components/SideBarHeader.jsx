import React from 'react';

function SidebarHeader() {
  return (
    <div className="flex">
      <aside className="w-1/4 bg-gray-200 p-4 min-h-screen">
        <ul>
          <li className="mb-4"><a href="#" className="text-gray-700">Home</a></li>
          <li className="mb-4"><a href="#" className="text-gray-700">About</a></li>
          <li className="mb-4"><a href="#" className="text-gray-700">Contact</a></li>
        </ul>
      </aside>
      <main className="w-3/4 p-10">
        <h1 className="text-3xl font-bold">Main Content</h1>
        <p className="mt-4 text-gray-700">This is the main content area with sidebar on the left.</p>
      </main>
    </div>
  );
}

export default SidebarHeader;
