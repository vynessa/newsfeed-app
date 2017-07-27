import React from 'react';

/**
 * @export
 * @class Preloader
 * @extends {React.Component}
 */
export default class Preloader extends React.Component {
  /**
   * @description Preloader Component
   * @returns {JSX.Element} Preloader
   * @memberof Preloader
   */
  render() {
    return (
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-brown-only">
          <div className="circle-clipper left">
            <div className="circle"/>
          </div>
          <div className="gap-patch">
            <div className="circle"/>
          </div>
            <div className="circle-clipper right">
            <div className="circle"/>
          </div>
        </div>
      </div>
    );
  }
}
