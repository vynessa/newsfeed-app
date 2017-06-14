import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App.jsx';
// import Sources from './components/Sources.jsx';
// import Articles from './components/Articles.jsx';

const app = document.getElementById('app');

ReactDOM.render(<App/>, app);
// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route component={App}>
//       <Route exact path="/"/>
//     </Route>
//   </Router>,
//   app
// );
