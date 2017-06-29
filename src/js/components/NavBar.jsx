import React from 'react';
import NewsActions from '../actions/NewsActions.jsx';
import { provider } from '../../../config/firebase';

// const firebase = require('firebase/app');
// require('firebase/app');

// const provider = new firebase.auth.GoogleAuthProvider();

/**
 * @description Navigation bar component
 * @class
 */
class NavBar extends React.Component {
  /**
   * 
   */
  constructor() {
    super();

    this.login = this.login.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  /**
   * @description Login method
   * @param {string} provider
   * @memberof NavBar
   * @returns {object}
   */
  login() {
    NewsActions.loginAuth(provider);
  }
  /**
   * @memberof NavBar
   */
  signOut() {
    NewsActions.signOutAuth();
  }

  /**
   * @description
   * @method
   * @returns {JSX.Element} NavBar
   */
  render() {
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
              <li>
                <a
                id="login-btn"
                onClick={this.login}
                className="waves-effect waves-light btn">Login
                </a>
              </li>
              <li>
                <a to="/sources"
                id="logout-btn"
                onClick ={this.signOut}
                className="waves-effect waves-light btn">Logout
                </a>
              </li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li>
                <a id="login-btn"
                onClick={this.login}
                className="waves-effect waves-light btn">Login
                </a>
              </li>
              <li>
                <a to="/"
                id="logout-btn"
                onClick={this.signOut}
                className="waves-effect waves-light btn">Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
