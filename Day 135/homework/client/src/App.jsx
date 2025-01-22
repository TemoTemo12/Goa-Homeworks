import React, { useEffect, useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Movies List</h1>
      <ul className="mt-4">
        {movies.map((movie, index) => (
          <li key={index} className="p-2 border-b">
            <strong>{movie.title}</strong> ({movie.year}) - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
