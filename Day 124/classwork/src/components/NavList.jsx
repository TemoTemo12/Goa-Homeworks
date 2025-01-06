// src/components/NavList.jsx
import { Link } from 'react-router-dom';

const NavList = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/seahorse-routers">Routers</Link></li>
        <li><Link to="/seahorse-id">Seahorse Details</Link></li>
        <li><Link to="/seahorse-new">New Seahorse</Link></li>
      </ul>
    </nav>
  );
};

export default NavList;
