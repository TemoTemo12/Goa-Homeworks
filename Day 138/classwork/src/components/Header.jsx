const Header = () => (
    <header className="bg-transparent text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">GameZone</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
  
  export default Header;
  