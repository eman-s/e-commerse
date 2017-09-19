import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import BaseLayout from './components/BaseLayout';
import Home from './components/Home'
import AllVehicles from './components/AllVehicles'
import AllWeapons from './components/AllWeapons'
import AllMisc from './components/AllMisc'
import Details from './components/Details'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/:endpoint/:id' component={Details} />
        <Route path='/vehicles/' component={AllVehicles} />
        <Route path='/weapons/' component={AllWeapons} />
        <Route path='/misc/' component={AllMisc} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
