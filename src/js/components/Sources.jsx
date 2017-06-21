import React from 'react';
import { browserHistory } from 'react-router';
import { Col, Card, Row, Input, Pagination } from 'react-materialize';
import NewsActions from '../actions/NewsActions';
import SourcesStore from '../stores/SourcesStore';
import SourcesList from './SourcesList.jsx';
// import Preloader from '../components/Preloader.jsx';

/**
 * @class
 * @param
 */
class Sources extends React.Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      search: ''
      // currentPage: 1
    };
    this.onChange = this.onChange.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }
  /**
   *
   */
  componentDidMount() {
    NewsActions.allSources();
    SourcesStore.addChangeListener(this.onChange);
  }
  /**
   *
   */
  componentWillUnmount() {
    SourcesStore.removeChangeListener(this.onChange);
  }
  /**
   *
   */
  onChange() {
    this.setState({
      sources: SourcesStore.getAll()
    });
  }
  /**
   *
   * @param {*} event
   */
  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }
  /**
   *
   */
  btnClick(id, sortBysAvailable) {
    NewsActions.allArticles(id, sortBysAvailable);
  }

  /**
   *
   * @param {*} event
   */
  handleCategory(event) {
    return (event.target.value === '1')
    ? Materialize.toast('Select a valid category', 4000, 'rounded')
    : NewsActions.categories(event.target.value);
  }
  /**
   *
   */
  render() {
    console.log(this.state);
    return (
      <div className="sources">
        <SourcesList
          sources={this.state.sources}
          sortBysAvailable={this.state.sortBysAvailable}
          search={this.state.search}
          updateSearch={this.updateSearch}
          btnClick={this.btnClick}
          handleCategory={this.handleCategory} />
      </div>
    );
  }
}

export default Sources;
