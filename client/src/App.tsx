import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Lobby from './components/Lobby';
import Room from './components/Room';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/room/:roomId">
          <Room />
        </Route>
        <Route path="/">
          <Lobby />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
