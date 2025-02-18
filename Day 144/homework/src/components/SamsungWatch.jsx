function SamsungWatch() {
    return (
      <div className="p-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Samsung Ultra Watch</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white shadow rounded-lg">
            <img src="watch-image.jpg" alt="Samsung Ultra Watch" className="w-full h-64 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-4">Unmatched Features</h2>
            <p className="text-gray-600">The Samsung Ultra Watch offers cutting-edge technology and advanced features.</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <img src="watch-image2.jpg" alt="Samsung Ultra Watch" className="w-full h-64 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-4">Enhanced Performance</h2>
            <p className="text-gray-600">With a longer battery life and powerful performance, it's built for everyday wear.</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <img src="watch-image3.jpg" alt="Samsung Ultra Watch" className="w-full h-64 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-4">Sleek Design</h2>
            <p className="text-gray-600">A stylish watch that complements your lifestyle while keeping you connected.</p>
          </div>
        </div>
      </div>
    );
  }
  