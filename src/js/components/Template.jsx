import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

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
