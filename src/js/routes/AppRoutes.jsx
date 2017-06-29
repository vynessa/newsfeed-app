/* global location localStorage*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, NotFoundRoute, browserHistory } from 'react-router';

import App from '../components/App.jsx';
import Sources from '../components/Sources.jsx';
import Articles from '../components/Articles.jsx';
// import ErrorPage from '../components/ErrorPage.jsx';
import Template from '../components/Template.jsx';

const routes = (
  <Route exact path="/" component={Template}>
    <IndexRoute component={App} />
    <Route path="sources" component={Sources} />
    <Route path="headlines" component={Articles} />
  </Route >
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
