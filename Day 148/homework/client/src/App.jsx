import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const API_BASE = "http://localhost:5000/api"; // შეცვალე შენი API-ის მიხედვით

const fetchData = async (endpoint, setData) => {
  try {
    const res = await axios.get(`${API_BASE}/${endpoint}`);
    setData(res.data);
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
  }
};

const Page = ({ title, endpoint }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(endpoint, setData);
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => (
  <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#333", color: "#fff" }}>
    <Link to="/">Home</Link>
    <Link to="/movies">Movies</Link>
    <Link to="/users">Users</Link>
    <Link to="/messages">Messages</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/football">Football</Link>
  </nav>
);

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to API Client</h1>} />
        <Route path="/movies" element={<Page title="Movies" endpoint="movies" />} />
        <Route path="/users" element={<Page title="Users" endpoint="users" />} />
        <Route path="/messages" element={<Page title="Messages" endpoint="messages" />} />
        <Route path="/posts" element={<Page title="Posts" endpoint="posts" />} />
        <Route path="/football" element={<Page title="Football" endpoint="football" />} />
      </Routes>
    </div>
  );
}

export default App;
