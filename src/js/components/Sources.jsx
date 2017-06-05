import React from 'react';
import axios from 'axios';

/**
 * @function
 * @param
 */
export default class Sources extends React.Component {
  /**
   *
   */
  constructor() {
    super();
    this.state = {
      allSources: []
    };
  }
  /**
   *
   */
  componentDidMount() {
    const apiUrl = 'https://newsapi.org/v1/sources';
    axios.get(apiUrl)
      .then((res) => {
        const sources = res.data.sources.map((obj) => { return obj.data; });
        this.setState({ sources });
      });
  }
  /**
   *
   */
  render() {
    return (
        <div className='sources'>
        </div>
    );
  }
}
