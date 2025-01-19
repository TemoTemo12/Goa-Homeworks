import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Belgian World!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Discover the beauty of Belgian cuisine, beer, and much more. Explore our themes and enjoy!
      </p>
      <div className="flex space-x-4">
        <a
          href="/cuisine"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Belgian Cuisine
        </a>
        <a
          href="/beer"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Belgian Beer
        </a>
        <a
          href="/free"
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
        >
          Free Theme
        </a>
      </div>
    </div>
  );
};

export default Home;
