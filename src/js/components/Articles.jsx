import React from 'react';
import NewsActions from '../actions/NewsActions.jsx';
import ArticlesStore from '../stores/ArticlesStore.jsx';
import ArticlesList from './ArticlesList.jsx';

/**
 * @class
 * @param
 */
class Articles extends React.Component {
  /**
   *
   */
  constructor(props) {
    super(props);
    this.state = {
      articles: ArticlesStore.getAll(),
      sortBy: ''
    };
    // this.sourceKey = ArticlesStore.getSourceKey() || localStorage.getItem('source_key');
    this.onChange = this.onChange.bind(this);
    this.updateSortBy = this.updateSortBy.bind(this);
    this.handleSort = this.handleSort.bind(this);
    // this.sourceKey = this.state.sourceKey;
  }
  /**
   *
   */
  componentDidMount() {
    // NewsActions.allArticles(sourceKey, sortBy[0]);
    // const id = 'al-jazeera-english';
    // const sort = 'top';
    // NewsActions.allArticles(id, sort);
    ArticlesStore.on('change', this.onChange);
  }
  /**
   *
   */
  componentWillUnmount() {
    ArticlesStore.removeListener('change', this.onChange);
  }
  /**
   *
   */
  onChange() {
    this.setState({
      articles: ArticlesStore.getAll(),
    });
  }
  /**
   *
   * @param {*} sourceKey
   * @param {*} sortBysAvailable
   */
  handleSort(sourceKey, sortBy) {
    return NewsActions.allArticles(sourceKey, sortBy);
  }
  /**
   *
   * @param {*} event
   */
  updateSortBy(event) {
    const val = event.target.value;
    this.setState({
      sortBy: val
    });
  }
  /**
   *
   */
  render() {
    console.log('Parent props', this.props);
    console.log('state2', this.state);
    console.log('Sourcekey', this.state.sourceKey);
    return (
      <ArticlesList
        articles={this.state.articles}
        handleSort={this.handleSort}
        sortBy = {this.state.sortBy}
        sourceKey= {this.state.sourceKey} />
    );
  }
}

export default Articles;
