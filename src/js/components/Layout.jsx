import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

/**
 * @description Template component to be persistent across the app
 * @param {object} props
 * @returns {JSX.Element} Template
 */
const Layout = (props) => {
  console.log('Props Children', props.children);
  /**
   * @description Renders Layout component
   * @returns {JSX.Element} Layout
   * @memberof Layout
   */
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer/>
    </div>
  );
};

Layout.defaultProps = {
  children: {}
};

Layout.propTypes = {
  children: PropTypes.object
};

export default Layout;
