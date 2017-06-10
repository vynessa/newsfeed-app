import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App.jsx';

const app = document.getElementById('app');

ReactDOM.render(<App/>, app);
/* ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}></Route>
  </Router>
);*/
