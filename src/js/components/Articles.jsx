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
      articles: [],
      sortBy: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSortOption = this.handleSortOption.bind(this);
  }
  /**
   *
   */
  componentDidMount() {
    // const id = 'al-jazeera-english';
    // const sort = 'top';
    // NewsActions.allArticles(id, sort);
    ArticlesStore.addChangeListener(this.onChange);
  }
  /**
   * 
   */
  componentWillUnmount() {
    ArticlesStore.removeChangeListener(this.onChange);
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
   * @param {*} event
   */
  handleSortOption(event, id) {
    event.preventDefault();
    console.log('Event:', event);
    console.log('Event Target:', event.target.value);
    const val = event.target.value;
    this.setState({
      sortBy: val
    });
    console.log('id:', id);
    NewsActions.allArticles(id, event.target.value);
  }

  /**
   *
   */
  render() {
    console.log('state:', this.state);
    return (
      <ArticlesList
        articles={this.state.articles}
        sortBy={this.state.sortBy}
        sortOption={this.handleSortOption} />
    );
  }
}

export default Articles;
