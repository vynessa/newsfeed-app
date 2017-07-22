import React from 'react';
import NewsActions from '../actions/newsActions';
import ArticlesStore from '../stores/articlesStore';
import ArticlesList from './ArticlesList.jsx';

/**
 * @description Articles component
 * @class
 */
class Articles extends React.Component {
  /**
   * Initialize State
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.sourceKey = localStorage.getItem('sourceKey');

    this.state = {
      articles: ArticlesStore.getAll(),
    };

    this.onChange = this.onChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  /**
   * @description Mount Component on every change
   * @method
   * @returns {void}
   */
  componentDidMount() {
    NewsActions.allArticles(this.sourceKey);
    ArticlesStore.on('change', this.onChange);
  }
  /**
   * @description Unmount Component
   * @method
   * @returns {void}
   */
  componentWillUnmount() {
    ArticlesStore.removeListener('change', this.onChange);
  }
  /**
   * @description Change state on refresh or user(s) request
   * @method
   */
  onChange() {
    this.setState({
      articles: ArticlesStore.getAll(),
    });
  }
  /**
   *@description Sort function to filter headlines
   * @method
   * @param {string} sourceKey
   * @param {string} sortBy
   * @returns {object} articles
   */
  handleSort(sourceKey, sortBy) {
    sourceKey = this.sourceKey;
    return NewsActions.allArticles(sourceKey, sortBy);
  }
  /**
   * @description render child component - ArticlesList
   * @method
   * @returns {JSX.Element} ArticlesList
   */
  render() {
    return (
      <ArticlesList
        articles={this.state.articles}
        handleSort={this.handleSort}
        sourceKey = {this.sourceKey} />
    );
  }
}

export default Articles;
