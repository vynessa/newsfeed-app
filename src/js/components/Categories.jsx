import React from 'react';

export default class Categories extends React.Component {
  render() {
    return (
      <div className='categories'>
        <li><a href="sass.html">Movies</a></li>
        <li><a href="badges.html">Entertainment</a></li>
        <li><a href="collapsible.html">Fashion</a></li>
        <li><a href="collapsible.html">Games</a></li>
        <li><a href="collapsible.html">Politics</a></li>
        <li><a className="waves-effect waves-light btn teal" href="#modal1">Logout</a></li>
      </div>
    );
  }
}
