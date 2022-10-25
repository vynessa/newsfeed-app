/* global window */
import React from 'react';
import GoogleButton from 'react-google-button';
import NewsActions from '../actions/newsActions';
import AuthStore from '../stores/authStore';

const firebase = require('firebase/app');

const provider = new firebase.auth.GoogleAuthProvider();

/**
 * @description Navigation bar component
 * @class
 */
class NavBar extends React.Component {
  /**
   * Creates an instance of NavBar.
   * @memberof NavBar
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
   * @returns {void}
   * @memberof NavBar
   */
  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({
      user
    });
  }
  /**
   * @description Login method
   * @param {string} provider
   * @memberof NavBar
   * @returns {void}
   */
  login() {
    NewsActions.loginAuth(provider);
  }
  /**
   * @memberof NavBar
   * @returns {void}
   */
  signOut() {
    AuthStore.clearUser();
  }

  /**
   * @description
   * @method
   * @returns {JSX.Element} NavBar
   */
  render() {
    const user = this.state.user;

    return (
      <div className="navbar-fixed">
        <nav className="brown">
          <div className="nav-wrapper">
              <div>
                <a href="/" className="brand-logo">e-Feedly</a>
                <a href="/"
                  data-activates="mobile-demo"
                  className="button-collapse">
                <i className="material-icons">menu</i>
                </a>
              </div>
              <ul className="right hide-on-med-and-down">
                {
                  (user === null) ?
                    <li><GoogleButton
                      id="login-btn"
                      type="light"
                      onClick={this.login}/>
                    </li>
                  :
                    <div>
                      <li>
                        <img className="circle responsive-img"
                        src={this.state.user.photoURL}/>
                      </li>
                      <li>{this.state.user.displayName}</li>
                      <li>
                        <a
                        id="logout-btn"
                        onClick ={this.signOut}
                        className="waves-effect waves-light btn">Logout
                        </a>
                      </li>
                    </div>
                }
              </ul>
              <ul className="side-nav" id="mobile-demo">
                {
                  (user === null) ?
                    <li>
                      <GoogleButton
                      id="login-btn"
                      type="light"
                      onClick={this.login}/>
                    </li>
                  :
                    <div>
                      <li>
                        <img className="circle responsive-img"
                          src={this.state.user.photoURL}/>
                        </li>
                      <li>{this.state.user.displayName}</li>
                      <li>
                        <a
                        id="logout-btn"
                        onClick={this.signOut}
                        className="waves-effect waves-light btn">Logout
                        </a>
                      </li>
                    </div>
                }
              </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
