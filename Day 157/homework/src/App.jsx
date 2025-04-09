import React, { useState } from "react";

export default function App() {
  const [loginUser, setLoginUser] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [forgotMessage, setForgotMessage] = useState("");
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState({ id: "", title: "", artist: "" });
  const [editMode, setEditMode] = useState(false);

  const users = [
    { username: "temo", password: "1234" },
    { username: "gio", password: "12345" },
  ];

  function handleLogin() {
    const found = users.find(
      (user) =>
        user.username === loginUser.username &&
        user.password === loginUser.password
    );
    if (found) {
      setLoggedIn(true);
    } else {
      alert("Invalid login 😢");
    }
  }

  function handleForgotPassword() {
    setForgotMessage("Password reset link sent to your email 📩");
  }

  function handleAddOrUpdateSong() {
    if (editMode) {
      setSongs((prev) =>
        prev.map((song) =>
          song.id === newSong.id ? newSong : song
        )
      );
      setEditMode(false);
    } else {
      setSongs((prev) => [...prev, newSong]);
    }
    setNewSong({ id: "", title: "", artist: "" });
  }

  function handleEditSong(song) {
    setNewSong(song);
    setEditMode(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-8 font-sans">
      {!loggedIn ? (
        <div className="max-w-md mx-auto bg-zinc-700 p-6 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
          <input
            className="w-full p-2 rounded-lg mb-2 bg-zinc-800 border border-zinc-600"
            type="text"
            placeholder="Username"
            value={loginUser.username}
            onChange={(e) =>
              setLoginUser({ ...loginUser, username: e.target.value })
            }
          />
          <input
            className="w-full p-2 rounded-lg mb-2 bg-zinc-800 border border-zinc-600"
            type="password"
            placeholder="Password"
            value={loginUser.password}
            onChange={(e) =>
              setLoginUser({ ...loginUser, password: e.target.value })
            }
          />
          <button
            onClick={handleLogin}
            className="bg-green-500 w-full py-2 rounded-lg hover:bg-green-600 transition"
          >
            Log In
          </button>
          <button
            onClick={handleForgotPassword}
            className="text-sm mt-3 underline text-zinc-300 hover:text-white"
          >
            Forgot Password?
          </button>
          {forgotMessage && (
            <p className="mt-2 text-green-400">{forgotMessage}</p>
          )}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">🎵 Spotify Clone</h2>

          <div className="bg-zinc-700 p-4 rounded-2xl mb-4 shadow-md">
            <input
              className="w-full p-2 rounded-lg mb-2 bg-zinc-800 border border-zinc-600"
              type="text"
              placeholder="Song ID"
              value={newSong.id}
              onChange={(e) =>
                setNewSong({ ...newSong, id: e.target.value })
              }
            />
            <input
              className="w-full p-2 rounded-lg mb-2 bg-zinc-800 border border-zinc-600"
              type="text"
              placeholder="Song Title"
              value={newSong.title}
              onChange={(e) =>
                setNewSong({ ...newSong, title: e.target.value })
              }
            />
            <input
              className="w-full p-2 rounded-lg mb-2 bg-zinc-800 border border-zinc-600"
              type="text"
              placeholder="Artist"
              value={newSong.artist}
              onChange={(e) =>
                setNewSong({ ...newSong, artist: e.target.value })
              }
            />
            <button
              onClick={handleAddOrUpdateSong}
              className="bg-blue-500 w-full py-2 rounded-lg hover:bg-blue-600 transition"
            >
              {editMode ? "Update Song" : "Add Song"}
            </button>
          </div>

          <div className="space-y-3">
            {songs.map((song) => (
              <div
                key={song.id}
                className="flex items-center justify-between bg-zinc-800 p-3 rounded-lg shadow-sm"
              >
                <div>
                  <p className="text-xl font-medium">{song.title}</p>
                  <p className="text-sm text-zinc-400">by {song.artist}</p>
                </div>
                <button
                  onClick={() => handleEditSong(song)}
                  className="bg-yellow-400 text-black px-4 py-1 rounded-full hover:bg-yellow-300"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
