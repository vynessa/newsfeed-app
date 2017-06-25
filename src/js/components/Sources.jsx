import React from 'react';
import { browserHistory } from 'react-router';
import { Col, Card, Row, Input, Pagination } from 'react-materialize';
import NewsActions from '../actions/NewsActions.jsx';
import SourcesStore from '../stores/SourcesStore.jsx';
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
      sources: SourcesStore.getAll(),
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
    // this.setState{

    // }
    // SourcesStore.addChangeListener(this.onChange);
    SourcesStore.on('change', () => {
      this.setState({
        sources: SourcesStore.getAll()
      });
    });
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
      search: event.target.value.substr(0, 25)
    });
  }
  /**
   *
   */
  btnClick(id, sortBysAvailable) {
    // create an action to hold sourceID and Name
    NewsActions.allArticles(id, sortBysAvailable);
  }

  /**
   *
   * @param {*} event
   */
  handleCategory(event) {
    return (event.target.value === '1')
    ? Materialize.toast('Select a valid category', 1000, 'rounded')
    : NewsActions.categories(event.target.value);
  }
  /**
   *
   */
  render() {
    console.log('Sources', this.state.sources);
    console.log(this.state.sources.sortBysAvailable);
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
