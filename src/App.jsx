import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { clientRouter } from './configs/router.config';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {clientRouter.map((route, index) => {
          const { path, exact, Component } = route;
          return (
            <Route
              key={index}
              path={path}
              exact={exact}
              component={Component}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
