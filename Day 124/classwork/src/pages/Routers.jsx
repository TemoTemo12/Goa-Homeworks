// src/pages/Routers.jsx
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavList from '../components/NavList';
import Home from './Home';
import NestedRoutes from './NestedRoutes';
import NewSeahorsePage from './NewSeahorsePage';
import SeahorseDetails from '../components/SeahorseDetails';

const Routers = () => {
  return (
    <Router>
      <NavList />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/seahorse-routers" component={NestedRoutes} />
        <Route path="/seahorse-id" component={SeahorseDetails} />
        <Route path="/seahorse-new" component={NewSeahorsePage} />
      </Switch>
    </Router>
  );
};

export default Routers;
