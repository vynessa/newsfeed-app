import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, NotFoundRoute, browserHistory } from 'react-router';

import App from '../components/App.jsx';
import Sources from '../components/Sources.jsx';
import Articles from '../components/Articles.jsx';
import ErrorPage from '../components/ErrorPage.jsx';
import Template from '../components/Template.jsx';

const routes = (
  <Route name="app" exact path="/" component={Template}>
    <IndexRoute component={App} />
    <Route path="sources" component={Sources} />
    <Route path="articles" component={Articles} />
    {/*<NotFoundRoute component={ErrorPage} />*/}
  </Route >
);

{/*<Router>
    <Route component={Main} path="app">
        <Route path="/" component={Home}/>
        <Route path="/cars" component={Car}/>
        <Route path="/about" component={About}/>
    </Route>
</Router>*/}
/**
 * 
 */
class AppRoutes extends React.Component {
  /**
   * 
   */
  render() {
    return <Router routes={routes} history={browserHistory} />;
  }
}

export default AppRoutes;
