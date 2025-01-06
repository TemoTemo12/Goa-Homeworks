import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavList from './components/NavList';
import Home from './pages/Home';
import Routers from './pages/Routers';
import NestedRoutes from './pages/NestedRoutes';
import NewSeahorsePage from './pages/NewSeahorsePage';

const App = () => {
   return (
       <Router>
           <div>
               <NavList />
               <Switch>
                   <Route exact path="/" component={Home} />
                   <Route path="/seahorse-routers" component={Routers} />
                   <Route path="/seahorse-nested" component={NestedRoutes} />
                   <Route path="/seahorse-new" component={NewSeahorsePage} />
               </Switch>
           </div>
       </Router>
       
   );
};

export default App;
