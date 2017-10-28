import React from 'react';
import ReactDOM from 'react-dom';
import '../../public/scss/main.scss';
import AppRoutes from './routes/AppRoutes.jsx';

// Store DOM expression in variable `app`
const app = document.getElementById('app');

// Render AppRoutes
ReactDOM.render(<AppRoutes />, app);
