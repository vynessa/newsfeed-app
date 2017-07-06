import React from 'react';
import GoogleButton from 'react-google-button';
import { Navbar, NavItem } from 'react-materialize';
// import { browserHistory } from 'react-router';
import NewsActions from '../actions/newsActions';
import AuthStore from '../stores/authStore';


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
  componentWillMount() {
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
   * @returns {void}
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
    return (
      <div className="navbar-fixed">
        <nav className="brown">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">e-Feeds</a>
            <a href="/"
              data-activates="mobile-demo"
              className="button-collapse">
            <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
                {
                  (user === null) ?
                  <GoogleButton
                  id="login-btn"
                  type="light"
                  onClick={this.login}/>
                :
              <div>
                <li>
                  <img className="circle responsive-img" src={this.state.user.photoURL}/>
                </li>
                <li>
                  {this.state.user.displayName}
                </li>
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
                <li>
                  <a
                  id="logout-btn"
                  onClick={this.signOut}
                  className="waves-effect waves-light btn">Logout
                  </a>
                </li>
              }
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
