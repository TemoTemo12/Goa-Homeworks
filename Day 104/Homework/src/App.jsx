import React from 'react';
import './App.css';
import Animal from './components/Animal';
import Iphone from './components/Iphone';
import Linux from './components/Linux';
import Windows from './components/Windows';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Multi-Theme Website</h1>
        <nav>
          <ul>
            <li><a href="#animal">Favorite Animal</a></li>
            <li><a href="#iphone">New iPhone</a></li>
            <li><a href="#linux">Linux</a></li>
            <li><a href="#windows">Windows</a></li>
            <li><a href="#news">Latest News</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Animal />
        <Iphone />
        <Linux />
        <Windows />
        <News />
      </main>

      <footer>
        <p>Created by Your Name</p>
      </footer>
    </div>
  );
}

export default App;
