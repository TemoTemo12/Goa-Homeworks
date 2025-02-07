import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const categories = [
  { name: "პერსონალური ბლოგი", path: "personal-blog" },
  { name: "ფოტოგრაფიის პორტფოლიო", path: "photography" },
  { name: "ონლაინ მაღაზია", path: "shop" },
  { name: "სამოგზაურო ბლოგი", path: "travel" },
  { name: "კულინარიული ბლოგი", path: "culinary" },
  { name: "ფიტნეს ბლოგი", path: "fitness" },
  { name: "მუსიკალური ბლოგი", path: "music" },
  { name: "ფილმების მიმოხილვა", path: "movies" },
  { name: "თამაშების ბლოგი", path: "games" },
  { name: "ახალი ამბები", path: "news" }
];

const Home = () => (
  <div className="flex flex-col items-center p-10">
    <h1 className="text-4xl font-bold mb-5">მრავალფუნქციური საიტი</h1>
    <p className="mb-4 text-lg text-gray-600">აქ ნახავთ სხვადასხვა თემატურ განყოფილებებს.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((cat) => (
        <Link
          key={cat.path}
          to={cat.path}
          className="p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 transform hover:scale-105"
        >
          {cat.name}
        </Link>
      ))}
    </div>
  </div>
);

const CategoryPage = ({ name }) => (
  <div className="p-10 text-center">
    <h2 className="text-3xl font-semibold text-gray-800">{name}</h2>
    <p className="mt-4 text-lg text-gray-600">მალე შეივსება საინტერესო კონტენტით...</p>
    <Link to="/" className="mt-5 block text-blue-500 hover:underline">მთავარ გვერდზე დაბრუნება</Link>
  </div>
);

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between items-center shadow-lg relative">
      <h1 className="text-2xl font-bold">ბლოგი & მაღაზია</h1>
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="text-gray-300 hover:text-white transition"
        >
          მენიუ ▼
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
            {categories.map((cat) => (
              <Link
                key={cat.path}
                to={cat.path}
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={() => setDropdownOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="p-4 bg-gray-900 text-white text-center mt-10">
    <p>&copy; 2025 ყველა უფლება დაცულია.</p>
  </footer>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {categories.map((cat) => (
          <Route key={cat.path} path={cat.path} element={<CategoryPage name={cat.name} />} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
