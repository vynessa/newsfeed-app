/* global location localStorage*/
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../components/App.jsx';
import Sources from '../components/Sources.jsx';
import Articles from '../components/Articles.jsx';
import Template from '../components/Template.jsx';

const checkUser = (nextState, replace, next) => {
  const user = localStorage.getItem('user');
  if (user !== null) {
    replace('/sources');
  }
  next();
};

const routes = (
  <Route exact path="/" component={Template}>
    <IndexRoute onEnter={checkUser} component={App} />
    <Route path="sources" component={localStorage.user ? Sources : browserHistory.push('/')} />
    <Route path="articles" component={localStorage.user ? Articles : browserHistory.push('/')} />
  </Route>
);

/**
 * @description Define routes for components
 * @class AppRoutes
 * @extends {React.Component}
 */
class AppRoutes extends React.Component {
  /**
   * @description Define routes for components
   * @memberof AppRoutes
   * @returns {JSX.Element} AppRoutes
   */
  render() {
    return <Router routes={routes} history={browserHistory} />;
  }
}

export default AppRoutes;
