import { useState } from "react";
import axios from "axios";

const MusicUpdate = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");

  const handleUpdate = async () => {
    await axios.put(`http://localhost:5000/api/music-update/${id}`, { title, artist, genre });
    setId(""); setTitle(""); setArtist(""); setGenre("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Update Music</h1>
      <input type="text" placeholder="Music ID" value={id} onChange={(e) => setId(e.target.value)} className="border p-2" />
      <input type="text" placeholder="New Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2" />
      <input type="text" placeholder="New Artist" value={artist} onChange={(e) => setArtist(e.target.value)} className="border p-2" />
      <input type="text" placeholder="New Genre" value={genre} onChange={(e) => setGenre(e.target.value)} className="border p-2" />
      <button onClick={handleUpdate} className="bg-yellow-500 text-white p-2">Update</button>
    </div>
  );
};

export default MusicUpdate;
