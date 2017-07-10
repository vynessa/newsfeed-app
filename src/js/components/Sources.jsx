import React from 'react';
import { browserHistory } from 'react-router';
import NewsActions from '../actions/newsActions';
import SourcesStore from '../stores/sourcesStore';
import SourcesList from './SourcesList.jsx';

/**
 * @description Parent component - Sources
 * @class Sources
 * @extends {React.Component}
 */
class Sources extends React.Component {
  /**
   * Creates an instance of Sources.
   * @param {any} props
   * @memberof Sources
   */
  constructor(props) {
    super(props);
    this.state = {
      sources: SourcesStore.getAll(),
      user: null,
      search: ''
    };
    this.onChange = this.onChange.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }

  /**
   * @returns {void}
   * @memberof Sources
   */
  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({
      user
    });
  }
  /**
   * @description On Component Mount, sources actions are called and stores listen for change
   * @memberof Sources
   * @returns {void}
   */
  componentDidMount() {
    NewsActions.allSources();
    SourcesStore.on('change', this.onChange);
  }
  /**
   * @description When Component unmounts, state is cleared.
   * @memberof Sources
   * @returns {void}
   */
  componentWillUnmount() {
    SourcesStore.removeListener('change', this.onChange);
  }
  /**
   * @description Change event to get all sources from stores
   * @memberof Sources
   * @returns {void}
   */
  onChange() {
    this.setState({
      sources: SourcesStore.getAll()
    });
  }

  /**
   * @description Update search event which gets change immediately
   * @param {any} event
   * @returns {void}
   * @memberof Sources
   */
  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 25)
    });
  }
  /**
   * @description
   * @function
   * @param {string} sourceKey
   * @param {array} sortBy
   * @returns {void}
   * @memberof Sources
   */
  btnClick(sourceKey, sortBy) {
    // create an action to hold sourceID and Name
    NewsActions.allArticles(sourceKey, sortBy);
  }

  /**
   * @description Get category using option value to filter categories
   * @function
   * @param {any} event
   * @returns {void}
   * @memberof Sources
   */
  handleCategory(event) {
    return NewsActions.getCategories(event.target.value);
  }

  /**
   * @description
   * @returns {JSX.Element} Soutcrs
   * @memberof Sources
   */
  render() {
    return (
      <div className="sources">
        <SourcesList
          sources={this.state.sources}
          search={this.state.search}
          updateSearch={this.updateSearch}
          btnClick={this.btnClick}
          handleCategory={this.handleCategory} />
      </div>
    );
  }
}

export default Sources;
