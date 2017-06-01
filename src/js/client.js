import React from 'react';
import ReactDOM from 'react-dom';


// import Layout from './components/Layout.jsx';

/**
 * @class {Layout}
 */
class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Vanessa'
    };
  }

  render() {
    return (
      <h1>Welcome {this.state.name} </h1>
    );
  }
}


const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);

