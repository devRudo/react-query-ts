import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FullFunctioningExample from './FullFunctioningExample';
import Home from './Home';
import PaginatedQueries from './PaginatedQueries';
import Queries from './Queries';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/full-functioning-example">
        <FullFunctioningExample />
      </Route>
      <Route path="/queries">
        <Queries />
      </Route>
      <Route path="/paginated-queries">
        <PaginatedQueries />
      </Route>
    </Switch>
  );
};

export default Routes;
