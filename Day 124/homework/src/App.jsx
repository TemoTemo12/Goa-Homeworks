import React, { useState } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('city');

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Header */}
      <header className="py-6 bg-black bg-opacity-40 shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto flex justify-center space-x-6">
          <button
            className={`px-6 py-2 text-lg font-semibold rounded-full transition-transform duration-300 ${
              activeSection === 'city'
                ? 'bg-white text-black scale-110'
                : 'bg-opacity-0 hover:bg-white hover:text-black hover:bg-opacity-20'
            }`}
            onClick={() => setActiveSection('city')}
          >
            შუა ქალაქი
          </button>
          <button
            className={`px-6 py-2 text-lg font-semibold rounded-full transition-transform duration-300 ${
              activeSection === 'movies'
                ? 'bg-white text-black scale-110'
                : 'bg-opacity-0 hover:bg-white hover:text-black hover:bg-opacity-20'
            }`}
            onClick={() => setActiveSection('movies')}
          >
            ქართული ფილმები
          </button>
          <button
            className={`px-6 py-2 text-lg font-semibold rounded-full transition-transform duration-300 ${
              activeSection === 'series'
                ? 'bg-white text-black scale-110'
                : 'bg-opacity-0 hover:bg-white hover:text-black hover:bg-opacity-20'
            }`}
            onClick={() => setActiveSection('series')}
          >
            ქართული სერიალები
          </button>
          <button
            className={`px-6 py-2 text-lg font-semibold rounded-full transition-transform duration-300 ${
              activeSection === 'dances'
                ? 'bg-white text-black scale-110'
                : 'bg-opacity-0 hover:bg-white hover:text-black hover:bg-opacity-20'
            }`}
            onClick={() => setActiveSection('dances')}
          >
            ქართული ცეკვები
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6">
        {activeSection === 'city' && (
          <section className="p-8 bg-white text-black rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105">
            <h1 className="text-4xl font-extrabold mb-4 text-purple-700">
              შუა ქალაქი
            </h1>
            <p className="text-lg">
              შუა ქალაქი არის ქართული სატელევიზიო სერიალი, რომელიც პოპულარულია მისი
              კომიკური და დრამატული ელემენტებით.
            </p>
          </section>
        )}
        {activeSection === 'movies' && (
          <section className="p-8 bg-white text-black rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105">
            <h1 className="text-4xl font-extrabold mb-4 text-indigo-700">
              ქართული ფილმები
            </h1>
            <p className="text-lg">
              ქართული კინო აქვს მდიდარი ისტორია, დაწყებული ძველი კლასიკური ნამუშევრებიდან
              თანამედროვე ფილმებამდე.
            </p>
          </section>
        )}
        {activeSection === 'series' && (
          <section className="p-8 bg-white text-black rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105">
            <h1 className="text-4xl font-extrabold mb-4 text-pink-700">
              ქართული სერიალები
            </h1>
            <p className="text-lg">
              ქართული სერიალები მოიცავს მრავალფეროვან ჟანრებს, დაწყებული დრამატული
              სიუჟეტებით კომედიურ სერიალებამდე.
            </p>
          </section>
        )}
        {activeSection === 'dances' && (
          <section className="p-8 bg-white text-black rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105">
            <h1 className="text-4xl font-extrabold mb-4 text-teal-700">
              ქართული ცეკვები
            </h1>
            <p className="text-lg">
              ქართული ცეკვები უნიკალურია თავისი სტილით და მოიცავს სხვადასხვა რეგიონალურ
              ტრადიციებს.
            </p>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 text-center bg-black bg-opacity-40">
        <p className="text-sm">
          შექმნილია React-ით და Tailwind CSS-ით • Temo Temo
        </p>
      </footer>
    </div>
  );
};

export default App;
