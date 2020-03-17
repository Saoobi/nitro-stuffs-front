import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from '../components/NavBar';

import Maps from '../screens/Maps';
import Stuffs from '../screens/Stuffs';
// Refactor this Router later with lazy, Suspense, etc..
// check this: https://github.com/Bakhaw/react-pwa-twitch/blob/master/src/Router/index.js

function Router() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <div className='ScreenContainer'>
          <Switch>
            <Route path='/game/:game/:map' component={Stuffs} />
            <Route path='/game/:game' component={Maps} />
          </Switch>
        </div>
      </>
    </BrowserRouter>
  );
}

export default Router;
