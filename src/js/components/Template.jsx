import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

/**
 * @description Template component to be persistent across the app
 * @param {object} props
 * @returns {JSX.Element} Template
 */
const Template = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer/>
    </div>
  );
};

export default Template;
