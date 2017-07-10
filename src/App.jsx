import React from 'react';
import thunk from 'redux-thunk';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { routerMiddleware, routerReducer, syncHistoryWithStore } from 'react-router-redux';

import MainTemplate from './templates/main/Main';

import HomePage from './pages/home/Home';
import AboutPage from './pages/about/About';
import ContactPage from './pages/contact/Contact';

import './App.css';

const router = routerMiddleware(browserHistory);

const store = createStore(
  combineReducers({
    routing: routerReducer
  }),
  applyMiddleware(
    thunk,
    router
  )
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Router history={history}>
    <Route path={CONFIG.baseHref} component={MainTemplate}>
      <IndexRoute component={HomePage} />
      <Route component={AboutPage} path="about" />
      <Route component={ContactPage} path="contact" />
    </Route>
  </Router>,
  document.getElementById('app')
);
