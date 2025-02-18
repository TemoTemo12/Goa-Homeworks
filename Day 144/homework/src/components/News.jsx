function News() {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Latest News</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">Tech Innovation in 2025</h3>
            <p className="text-gray-600">Discover the latest breakthroughs in AI, cloud computing, and quantum technology.</p>
          </div>
          <div className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">New React Features Released</h3>
            <p className="text-gray-600">React 19 brings new optimizations and better state management.</p>
          </div>
          <div className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">SpaceX's Next Mission</h3>
            <p className="text-gray-600">Elon Musk's company prepares for the next Mars expedition.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default News;
  