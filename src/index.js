import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './redux/store'

import WebSite from './WebSite.component.jsx'

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <WebSite />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
