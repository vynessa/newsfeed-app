import React from 'react';
import { Link } from 'react-router';

/**
 * @class ErrorPage
 * @extends {Component}
 */
const ErrorPage = () => {
  /**
   * @returns {JSX.Element} ErrorPage
   * @memberof ErrorPage
   */
  return (
    <div>
      <h1>Page Not Found!</h1>
      <p>Oops! Sorry, there is nothing to see here</p>
      <p><Link to="/">Back to Home Page</Link></p>
    </div>
  );
};


export default ErrorPage;
