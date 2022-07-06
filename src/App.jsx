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
import Starter from './views/Starter';
import Alerts from './views/ui/Alerts';
import Badges from './views/ui/Badges';
import Buttons from './views/ui/Buttons';
import Cards from './views/ui/Cards';
import Grid from './views/ui/Grid';
import Tables from './views/ui/Tables';
import Forms from './views/ui/Forms';
import Breadcrumbs from './views/ui/Breadcrumbs';
import About from './views/About';

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
              <Route path="/admin" element={<FullLayout />}>
                <Route path="/admin/starter" element={<Starter />} />
                <Route path="/admin/alerts" element={<Alerts />} />
                <Route path="/admin/badges" element={<Badges />} />
                <Route path="/admin/buttons" element={<Buttons />} />
                <Route path="/admin/cards" element={<Cards />} />
                <Route path="/admin/grid" element={<Grid />} />
                <Route path="/admin/table" element={<Tables />} />
                <Route path="/admin/forms" element={<Forms />} />
                <Route path="/admin/breadcrumbs" element={<Breadcrumbs />} />
                <Route path="/admin/about" element={<About />} />
              </Route>
              <Route path="" element={<PageNotFound />} />
            </Routes>
          }
        />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
