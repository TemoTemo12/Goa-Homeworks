import React, { useState } from 'react';
import Home from './components/Home';
import TurtlePresentation from './components/TurtlePresentation';
import ProjectStructure from './components/ProjectStructure';
import KharebaGogia from './components/KharebaGogia';
import './App.css';

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "turtles":
        return <TurtlePresentation />;
      case "structure":
        return <ProjectStructure />;
      case "kharebaGogia":
        return <KharebaGogia />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <nav>
        <button onClick={() => setPage("home")}>მთავარი</button>
        <button onClick={() => setPage("turtles")}>ზღვის კუები</button>
        <button onClick={() => setPage("structure")}>სტრუქტურა</button>
        <button onClick={() => setPage("kharebaGogia")}>ხარება და გოგია</button>
      </nav>
      <div className="content">{renderPage()}</div>
    </div>
  );
}

export default App;
