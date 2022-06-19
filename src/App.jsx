import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { clientRouter } from './configs/router.config';

function App() {
  const OurFallbackComponent = ({ error, resetErrorBoundary }) => {
    return (
      <div>
        <h1>An error occurred: {error?.message}</h1>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  };

  return (
    <ErrorBoundary FallbackComponent={OurFallbackComponent}>
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
    </ErrorBoundary>
  );
}

export default App;
