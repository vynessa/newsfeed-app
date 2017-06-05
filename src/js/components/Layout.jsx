import React from 'react';

import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

/**
 * @function
 * @param
 */
export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Footer />
      </div>
    );
  }
}
