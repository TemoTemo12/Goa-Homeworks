import React from 'react';
import Movies from './Movies';
import Music from './Music';
import Quotes from './Quotes';
import UserProfile from './UserProfile';
import YouTubeClone from './YouTubeClone';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="p-4 bg-gray-800">
        <h1 className="text-3xl">Lite Entertainment App</h1>
      </header>
      <main>
        <Movies />
        <Music />
        <Quotes />
        <UserProfile />
        <YouTubeClone />
      </main>
    </div>
  );
}

export default App;
