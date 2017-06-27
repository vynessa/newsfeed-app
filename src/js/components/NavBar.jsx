import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router';
import GoogleLogin from 'react-google-login';

// import css from '../../../public/css/main.scss';

/**
 * @function
 * @param
 */
class NavBar extends React.Component {
  render() {
    // const buttonHide = (user) => {
    //   if (!user) {
    //     $('#logout-btn').show();
    //   } else {
    //     $('#login-btn').hide();
    //   }
    // };

    // const login = () => {
    //   const onSuccess = (googleUser) => {
    //     const profile = googleUser.getBasicProfile();
    //     localStorage.setItem(
    //       'User',
    //       JSON.stringify({
    //         iD: profile.getId(),
    //         name: profile.getName(),
    //         imageURL: profile.getImageUrl(),
    //         email: profile.getEmail()
    //       })
    //     );
    //     location.reload();
    //   };
    // };

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
              <li><Link to="Sources" id="login-btn"
                className="waves-effect waves-light btn">Login</Link></li>
              <li><Link to="/" id="logout-btn"
                className="waves-effect waves-light btn">Logout</Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to="Sources" id="login-btn"
                className="waves-effect waves-light btn">Login</Link></li>
              <li><Link to="/" id="logout-btn"
                className="waves-effect waves-light btn">Logout</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
