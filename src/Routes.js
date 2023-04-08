import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FullFunctioningExample from './FullFunctioningExample';
import Home from './Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/full-functioning-example">
        <FullFunctioningExample />
      </Route>
    </Switch>
  );
};

export default Routes;
