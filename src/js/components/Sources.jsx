import React from 'react';
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
    const sourcesData = SourcesStore.getAll();
    this.state = {
      sources: sourcesData.sources,
      search: '',
      categories: sourcesData.categoryList,
    };
    this.onChange = this.onChange.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.sortCategory = this.sortCategory.bind(this);
    this.displayArticles = this.displayArticles.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  /**
   * @description Sources actions are called and stores listen for change
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
    const sourcesData = SourcesStore.getAll();
    this.setState({
      sources: sourcesData.sources
    });
    this.getCategories();
  }

  getCategories() {
    const sourcesData = SourcesStore.getAll();
    this.setState({
      categories: sourcesData.categoryList
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
   * @description Handles display of all articles for each source
   * @function
   * @param {string} sourceId
   * @param {array} sortBy
   * @returns {void}
   * @memberof Sources
   */
  displayArticles(sourceId, sortBy) {
    // create an action to hold sourceID and Name
    NewsActions.allArticles(sourceId, sortBy);
  }

  /**
   * @description Get category using option value to filter categories
   * @function
   * @param {any} event
   * @returns {void}
   * @memberof Sources
   */
  sortCategory(event) {
    return NewsActions.allSources(event.target.value);
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
          categories={this.state.categories}
          updateSearch={this.updateSearch}
          displayArticles={this.displayArticles}
          sortCategory={this.sortCategory} />
      </div>
    );
  }
}

export default Sources;
