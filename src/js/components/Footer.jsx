import React from 'react';

/**
 * 
 * 
 * @export
 * @class Footer
 * @extends {React.Component}
 */
export default class Footer extends React.Component {
  /**
   * @description Renders Footer component
   * @returns {JSX.Element} Footer
   * @memberof Footer
   */
  render() {
    return (
      <footer>
        <div className='footer'>
          <p className='center-align'>Designed by Vanessa Ejikeme</p>
          <p className='center-align'>© 2017 Copyright</p>
        </div>
      </footer>
    );
  }
}
