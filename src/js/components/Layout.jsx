import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

/**
 * @function
 * @param
 */
class Layout extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Footer />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
