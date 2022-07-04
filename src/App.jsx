import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { clientRouter } from './configs/router.config';
import TemplateClient from './templates/Template/client/TemplateClient';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { SuspenseComponent } from './components';
// import PrivateRoute from './layout/PrivateRoute/PrivateRoute';

import './assets/scss/css/responsive.css';
import './assets/scss/css/woocomerce.css';
import './assets/scss/index.scss';

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
        <SuspenseComponent
          component={
            <Switch>
              {clientRouter.map((route, index) => {
                const {
                  path,
                  exact,
                  name,
                  Component,
                  isScrollToTop,
                  isBreadcrumb,
                } = route;
                // if (requireLogin) {
                //   return (
                //     <Route path={path} exact={exact} key={index}>
                //       <PrivateRoute>
                //         <TemplateClient Component={Component} />
                //       </PrivateRoute>
                //     </Route>
                //   );
                // }
                return (
                  <Route key={index} path={path} exact={exact}>
                    <TemplateClient
                      Component={Component}
                      path={path}
                      name={name}
                      isScrollToTop={isScrollToTop}
                      isBreadcrumb={isBreadcrumb}
                    />
                  </Route>
                );
              })}
              <Route path="" component={PageNotFound} />
            </Switch>
          }
        />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
