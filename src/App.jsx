import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExamplePage from './pages/ExamplePage';
import Header from './pages/ClientPages/Header';
import Index from './pages/ClientPages/Home/Index';
import Footer from './pages/ClientPages/Footer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/exam'} component={ExamplePage} />
        {/* <Route exact path={'/'} component={ExamplePage} /> */}
        <Route exact path={'/'} render={() => {
          return <div>
            <Header />
            <Index />
            <Footer />
          </div>
        }} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
