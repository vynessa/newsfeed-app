import React from 'react';
import Categories from './Categories.jsx';
/**
 * @function
 * @param
 */
export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="brown">
          <div className="nav-wrapper">
            <a href="index.html" className="brand-logo">News App</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <Categories/>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <Categories/>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
