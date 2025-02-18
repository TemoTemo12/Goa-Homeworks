function Documentary() {
    return (
      <div className="p-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Documentary Series: The Earth Chronicles</h1>
        <div className="space-y-6">
          <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold">Episode 1: The Beginning</h2>
            <p className="text-gray-600">A look at the origins of Earth and the early stages of life.</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold">Episode 2: The Age of Dinosaurs</h2>
            <p className="text-gray-600">Exploring the rise and fall of the dinosaurs, and their impact on Earth's history.</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold">Episode 3: Human Evolution</h2>
            <p className="text-gray-600">Examining how humans evolved and shaped the planet we live on today.</p>
          </div>
        </div>
      </div>
    );
  }
  