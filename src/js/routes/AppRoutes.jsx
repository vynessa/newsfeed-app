/* global location localStorage*/
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import HomePage from '../components/HomePage.jsx';
import Sources from '../components/Sources.jsx';
import Articles from '../components/Articles.jsx';
import Layout from '../components/Layout.jsx';

const checkUser = (nextState, replace, next) => {
  const user = localStorage.getItem('user');
  if (user !== null) {
    replace('/sources');
  }
  next();
};

const routes = (
  <Route exact path="/" component={Layout}>
    <IndexRoute onEnter={checkUser} component={HomePage} />
      <Route path="sources"
    component={localStorage.user ? Sources : browserHistory.push('/')} />
    <Route path="articles"
    component={localStorage.user ? Articles : browserHistory.push('/')} />
  </Route>
);

/**
 * @description Define routes for components
 * @class AppRoutes
 * @extends {React.Component}
 */
const AppRoutes = () => {
  return <Router routes={routes} history={browserHistory} />;
};

export default AppRoutes;
