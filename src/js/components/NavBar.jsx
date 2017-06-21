import React from 'react';
import { Link } from 'react-router';

// import css from '../../../public/css/main.scss';

/**
 * @function
 * @param
 */
export default class NavBar extends React.Component {
  render() {
    const showButton = () => {

    };

    const hideButton = () => {

    };

    return (
      <div className="navbar-fixed">
        <nav className="brown">
          <div className="nav-wrapper">
            <a href="index.html" className="brand-logo">e-Feeds</a>
            <a href="index.html"
              data-activates="mobile-demo"
              className="button-collapse">
              <i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to="Sources" className="waves-effect waves-light btn login-btn">Login</Link></li>
              <li><Link to="/" className="waves-effect waves-light btn logout-btn">Logout</Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to="Sources" className="waves-effect waves-light btn login-btn">Login</Link></li>
              <li><Link to="/" className="waves-effect waves-light btn logout-btn">Logout</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
