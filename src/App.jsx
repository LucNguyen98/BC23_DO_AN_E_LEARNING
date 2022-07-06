import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { clientRouter } from './configs/router.config';
import TemplateClient from './templates/Template/client/TemplateClient';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { SuspenseComponent } from './components';
import PrivateRoute from './layout/PrivateRoute/PrivateRoute';

import './assets/scss/css/responsive.css';
import './assets/scss/css/woocomerce.css';
import './assets/scss/index.scss';
import FullLayout from './layouts/FullLayout';

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
            <Routes>
              {clientRouter.map((route, index) => {
                const {
                  path,
                  exact,
                  name,
                  Component,
                  isScrollToTop,
                  isBreadcrumb,
                  requireLogin,
                } = route;
                if (requireLogin) {
                  return (
                    <Route
                      path={path}
                      exact={exact}
                      key={index}
                      element={
                        <PrivateRoute>
                          <TemplateClient Component={Component} />
                        </PrivateRoute>
                      }
                    />
                  );
                }
                return (
                  <Route
                    key={index}
                    path={path}
                    exact={exact}
                    element={
                      <TemplateClient
                        Component={Component}
                        path={path}
                        name={name}
                        isScrollToTop={isScrollToTop}
                        isBreadcrumb={isBreadcrumb}
                      />
                    }
                  />
                );
              })}
              <Route path="/admin" component={FullLayout} />
              <Route path="" component={PageNotFound} />
            </Routes>
          }
        />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
