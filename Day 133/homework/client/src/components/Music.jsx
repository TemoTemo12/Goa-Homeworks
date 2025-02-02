import React, { useState, useEffect } from 'react';

function Music() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('/api/music')
      .then(res => res.json())
      .then(data => setSongs(data));
  }, []);

  return (
    <div className="m-4">
      <h2 className="text-xl font-semibold">Top Songs</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {songs.map((song) => (
          <div key={song.id} className="p-4 bg-gray-800 rounded-md text-white">
            <h3 className="text-lg">{song.title}</h3>
            <p>{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Music;
