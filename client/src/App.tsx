import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Lobby from './components/Lobby';
import Room from './components/Room';
import GlobalStyle from './components/utils/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
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
    </>
  );
};

export default App;
