import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
        <div className="text-center p-8">
          <div className="flex justify-center items-center mb-6">
            <button
              onClick={toggleDarkMode}
              className="p-3 bg-gray-300 dark:bg-gray-700 rounded-full shadow-md transition-all hover:scale-110"
            >
              <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                className={`h-6 w-6 ${darkMode ? "text-yellow-400" : "text-gray-800"}`}
              />
            </button>
          </div>
          <h1 className="text-5xl font-bold tracking-wide mb-4">
            Hello, <span className="text-blue-500">world</span>!
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Click the {darkMode ? "sun" : "moon"} icon to switch modes.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            By: Temo Temo
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
