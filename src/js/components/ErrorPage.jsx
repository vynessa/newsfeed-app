import React, { Component } from 'react';
import { Link } from 'react-router';


/**
 * 
 * 
 * @class ErrorPage
 * @extends {Component}
 */
class ErrorPage extends Component {
  /**
   * 
   * 
   * @returns 
   * @memberof ErrorPage
   */
  render() {
    return (
      <div>
        <h1>Page Not Found!</h1>
        <p>Oops! Sorry, there is nothing to see here</p>
        <p><Link to="/">Back to Home Page</Link></p>
      </div>
    );
  }
}

export default ErrorPage;
