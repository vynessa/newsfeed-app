import React from 'react';
import { Col, Card, Row, Input, Pagination } from 'react-materialize';
import NewsActions from '../actions/NewsActions';
import SourcesStore from '../stores/SourcesStore';
import SourcesList from './SourcesList.jsx';
// import Preloader from '../components/Preloader.jsx';

/**
 * @class
 * @param
 */
export default class Sources extends React.Component {
  /**
   *  
   */
  render() {
    return (
      <div className="sources">
        <SourcesList />
      </div>
    );
  }
}

