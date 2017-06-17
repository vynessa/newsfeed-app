import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import css from '../../public/css/main.scss';
import Client from './client.jsx';


import App from './components/App.jsx';
import Sources from './components/Sources.jsx';
import Articles from './components/Articles.jsx';

const app = document.getElementById('app');

// ReactDOM.render(<App/>, app);
ReactDOM.render(
    <Client />,
//   <Router history={browserHistory}>
//     <Route component={App}>
//       <Route path="/" component={Sources}/>
//       <Route path="articles" component={Articles}/>
//     </Route>
//   </Router>,
app
);
