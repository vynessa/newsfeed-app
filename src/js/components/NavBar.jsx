import React from 'react';
import { browserHistory } from 'react-router';
import NewsActions from '../actions/NewsActions.jsx';
import AuthStore from '../stores/AuthStore.jsx';

const firebase = require('firebase/app');
require('firebase/auth');

const provider = new firebase.auth.GoogleAuthProvider();

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
    this.state = {
      user: null
    };
    this.login = this.login.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  /**
   * 
   * 
   * @memberof NavBar
   */
  componentDidMount() {
    // const user = AuthStore.getUser();
    // console.log("User", user);
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({
      user
    });
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

  loginFailure() {
  }
  /**
   * @memberof NavBar
   */
  signOut() {
    localStorage.clear();
    location.reload();
  }

  /**
   * @description
   * @method
   * @returns {JSX.Element} NavBar
   */
  render() {
    const user = this.state.user;
    console.log('yppppp', user);
    return (
      <div className="navbar-fixed">
        <nav className="brown">
          <div className="nav-wrapper">
            {
              (user === null) ?
              <div>
                <a href="/" className="brand-logo">e-Feeds</a>
                <a href="/"
                  data-activates="mobile-demo"
                  className="button-collapse">
                <i className="material-icons">menu</i>
                </a>
              </div>
              :
              <div>
                <a href="/" className="brand-logo">e-Feeds</a>
                <a href="/"
                  data-activates="mobile-demo"
                  className="button-collapse">
                  <i className="material-icons">menu</i>
                </a>
              </div>
            }
            <ul className="right hide-on-med-and-down">
                {
                  (user === null) ?
                <li>
                  <a
                  id="login-btn"
                  onClick={this.login}
                  className="waves-effect waves-light btn">Login
                  </a>
                </li>
                :
              <li>
                <a
                id="logout-btn"
                onClick ={this.signOut}
                className="waves-effect waves-light btn">Logout
                </a>
              </li>
                }
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li>
                <a
                id="login-btn"
                onClick={this.login}
                className="waves-effect waves-light btn">Login
                </a>
              </li>
              <li>
                <a
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
