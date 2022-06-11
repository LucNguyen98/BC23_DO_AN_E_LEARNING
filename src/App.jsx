import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExamplePage from './pages/ExamplePage';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/exam'} component={ExamplePage} />
        <Route exact path={'/'} component={ExamplePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
