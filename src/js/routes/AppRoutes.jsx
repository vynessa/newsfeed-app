import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import css from '../../public/css/main.scss';


import App from './components/App.jsx';
import Sources from './components/Sources.jsx';
import Articles from './components/Articles.jsx';

const app = document.getElementById('app');

const routes = (
    <Route path="/" component={App}>
        <Route path="articles" component={Articles} />
    </Route >
);

class Approutes extends React.Component {
    render() {
        return <Router routes={routes} history={browserHistory} />;
    }
}

export default Approutes;
// ReactDOM.render(<App/>, app);
// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route component={App}>
//       <Route path="/" component={Sources}/>
//       <Route path="articles" component={Articles}/>
//     </Route>
//   </Router>,
//   app
// );
