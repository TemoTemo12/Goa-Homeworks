import { useState } from "react";
import axios from "axios";

const MusicDelete = () => {
  const [id, setId] = useState("");

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/music-delete/${id}`);
    setId("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Delete Music</h1>
      <input type="text" placeholder="Music ID" value={id} onChange={(e) => setId(e.target.value)} className="border p-2" />
      <button onClick={handleDelete} className="bg-red-500 text-white p-2">Delete</button>
    </div>
  );
};

export default MusicDelete;
