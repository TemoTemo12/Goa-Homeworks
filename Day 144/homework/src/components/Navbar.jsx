import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">All-in-One</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">News</Link></li>
          <li><Link to="/programming" className="hover:text-gray-300">Programming</Link></li>
          <li><Link to="/portfolio" className="hover:text-gray-300">Portfolio</Link></li>
          <li><Link to="/samsung-watch" className="hover:text-gray-300">Samsung Watch</Link></li>
          <li><Link to="/documentary" className="hover:text-gray-300">Documentary</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
