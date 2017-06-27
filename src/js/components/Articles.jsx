import React from 'react';
import { Link } from 'react-router';
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
      sortBy: ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleSortOptions = this.handleSortOptions.bind(this);
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
  handleSortOptions(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target.value);
    this.setState({
      sortBy: event.target.value
    });
    // NewsActions.allArticles(event.target.value)
  }

  /**
   *
   */
  render() {
    console.log('state', this.state);
    return (
      <ArticlesList
        articles={this.state.articles}
        sortBy={this.state.sortBy}
        sortOptions={this.handleSortOptions} />
    );
  }
}

export default Articles;
