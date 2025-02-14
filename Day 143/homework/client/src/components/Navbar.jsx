import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">Phone Shop</Link>
      <Link to="/add" className="bg-white text-blue-600 px-4 py-2 rounded">Add Product</Link>
    </nav>
  );
}
