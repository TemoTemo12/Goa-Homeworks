export default function Features() {
    return (
      <div className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-12">Features</h2>
        <div className="flex flex-col md:flex-row justify-around mx-auto md:space-x-8">
          <div className="bg-white shadow-md p-6 rounded-lg mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Feature One</h3>
            <p className="text-gray-600">Description of feature one.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
            <p className="text-gray-600">Description of feature two.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
            <p className="text-gray-600">Description of feature three.</p>
          </div>
        </div>
      </div>
    );
  }
  