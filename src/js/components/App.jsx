import React from 'react';

import NavBar from './NavBar.jsx';
import Sources from './Sources.jsx';
import Articles from './Articles.jsx';
import Footer from './Footer.jsx';

/**
 * @function
 * @param
 */
export default class App extends React.Component {
  /**
   * 
   */
  render() {
    return (
      <div>
        <NavBar/>
        <div className='row'><Sources/></div>
        <Footer/>
      </div>
    );
  }
}
