import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { clientRouter } from './configs/router.config';
import Home from './pages/ClientPages/Home/Home';
import { Header, Footer } from './components';

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
            const { path, exact } = route;
            return (
              <Route
                render={() => {
                  return (
                    <div>
                      <Header />
                      <Home />
                      <Footer />
                    </div>
                  );
                }}
                key={index}
                path={path}
                exact={exact}
                // component={Component}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
