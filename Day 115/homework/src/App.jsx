import React from 'react';
import HomePage from './components/HomePage';
import ThematicPage from './components/ThematicPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="container mx-auto p-6 space-y-10">
      <HomePage />
      <ThematicPage />
      <LoginPage />
    </div>
  );
}

export default App;
