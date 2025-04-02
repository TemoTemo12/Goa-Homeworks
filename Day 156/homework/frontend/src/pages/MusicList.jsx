import { useState, useEffect } from "react";
import axios from "axios";

const MusicList = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/music-data")
      .then((res) => setMusic(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Music List</h1>
      {music.map((item) => (
        <div key={item._id} className="border p-3 my-2">
          <h2 className="text-lg">{item.title} - {item.artist}</h2>
          <p className="text-sm">{item.genre}</p>
        </div>
      ))}
    </div>
  );
};

export default MusicList;
