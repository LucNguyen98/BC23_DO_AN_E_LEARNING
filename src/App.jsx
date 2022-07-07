import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import {
  adminParentRouter,
  adminRouter,
  clientRouter,
} from './configs/router.config';
import TemplateClient from './templates/Template/client/TemplateClient';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import PrivateRoute from './layouts/PrivateRoute/PrivateRoute';

import './assets/scss/css/responsive.css';
import './assets/scss/css/woocomerce.css';
import './assets/scss/index.scss';
import PrivateAdminRoute from './layouts/PrivateRoute/PrivateAdminRoute';
import TemplateAdmin from './templates/Template/admin/TemplateAdmin';

function App() {
  const OurFallbackComponent = ({ error, resetErrorBoundary }) => {
    return (
      <div>
        <h1>An error occurred: {error?.message}</h1>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  };

  const renderClientRouter = () => {
    return clientRouter.map((route, index) => {
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
                <TemplateClient Component={<Component />} />
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
    });
  };

  const renderAdminRouter = () => {
    const { exact, path, Component } = adminParentRouter;
    return (
      <Route
        exact={exact}
        path={path}
        element={
          <PrivateAdminRoute isRequired={false}>
            {<TemplateAdmin Component={<Component />} />}
          </PrivateAdminRoute>
        }
      >
        {adminRouter.map((route, index) => {
          const { path, Component } = route;
          return (
            <Route
              key={index}
              path={path}
              element={<TemplateAdmin Component={<Component />} />}
            />
          );
        })}
      </Route>
    );
  };

  return (
    <ErrorBoundary FallbackComponent={OurFallbackComponent}>
      <BrowserRouter>
        <Routes>
          {renderClientRouter()}
          {renderAdminRouter()}
          <Route path="" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
