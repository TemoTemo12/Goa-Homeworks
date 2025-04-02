import { useState } from "react";
import axios from "axios";

const MusicCreate = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/music-create", { title, artist, genre });
    setTitle(""); setArtist(""); setGenre("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Add Music</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2" />
        <input type="text" placeholder="Artist" value={artist} onChange={(e) => setArtist(e.target.value)} className="border p-2" />
        <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white p-2">Add</button>
      </form>
    </div>
  );
};

export default MusicCreate;
