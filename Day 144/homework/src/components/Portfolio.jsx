function Portfolio() {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">My Portfolio</h2>
        <div className="space-y-6">
          <div className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">React Projects</h3>
            <p className="text-gray-600">Modern web applications built with React and Tailwind CSS.</p>
          </div>
          <div className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">JavaScript Utilities</h3>
            <p className="text-gray-600">Custom scripts and libraries for better web performance.</p>
          </div>
          <div className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">UI/UX Designs</h3>
            <p className="text-gray-600">Beautiful and responsive interfaces for mobile and web.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Portfolio;
  