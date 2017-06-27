import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import '../../public/scss/main.scss';
import AppRoutes from './routes/AppRoutes.jsx';


// import App from './components/App.jsx';
// import Sources from './components/Sources.jsx';
// import Articles from './components/Articles.jsx';

const app = document.getElementById('app');

ReactDOM.render(<AppRoutes />, app);
