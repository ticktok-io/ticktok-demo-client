import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise'

import App from './app';
import reducers from './reducers';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App/>
  </Provider>
  , document.querySelector('.container'));


// For hot reloading of react components
if (module.hot) {
  module.hot.accept('./app', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./app').default; // eslint-disable-line global-require
    ReactDOM.render(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <NextApp/>
      </Provider>
      , document.querySelector('.container'));
  });
}
