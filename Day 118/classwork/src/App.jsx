import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ROUTES } from "./constants";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={ROUTES.CONTACTS}>Contacts</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACTS} element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
