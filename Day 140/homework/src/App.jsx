import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.from(".home-title", { opacity: 0, y: -50, duration: 1 });
  }, []);
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold home-title">Welcome to Multi-Category Website</h1>
      <nav className="mt-8 space-x-4">
        {sections.map(({ name, path }) => (
          <Link key={path} to={path} className="text-lg text-gray-300 hover:text-white transition">
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

const Page = ({ title }) => {
  useEffect(() => {
    gsap.from(".page-title", { opacity: 0, scale: 0.8, duration: 1 });
  }, []);
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold page-title">{title}</h1>
      <Link to="/" className="mt-4 text-gray-300 hover:text-white transition">
        Back to Home
      </Link>
    </div>
  );
};

const sections = [
  { name: "Handmade Jewelry", path: "/jewelry" },
  { name: "Fitness Center", path: "/fitness" },
  { name: "Restaurant", path: "/restaurant" },
  { name: "Photography", path: "/photography" },
  { name: "Tours", path: "/tours" },
  { name: "ROG Tech", path: "/rog" },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {sections.map(({ name, path }) => (
          <Route key={path} path={path} element={<Page title={name} />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
