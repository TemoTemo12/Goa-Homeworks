// src/pages/NestedRoutes.jsx
import { Route, Switch } from 'react-router-dom';
import SeahorseDetails from '../components/SeahorseDetails';

const NestedRoutes = () => {
  return (
    <Switch>
      <Route path="/seahorse-routers/seahorse-id" component={SeahorseDetails} />
    </Switch>
  );
};

export default NestedRoutes;
