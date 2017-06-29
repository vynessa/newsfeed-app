import React from 'react';
import Home from './Home.jsx';
const firebase = require('firebase/app');
/**
 * @description Home Page Component
 * @class
 */
export default class App extends React.Component {
  constructor() {
    super();
  }
  /**
   * @description render Home Component
   * @returns {JSX.Element} Home Page
   */
  render() {
    return (
      <div>
        <Home/>
      </div>
    );
  }

}
