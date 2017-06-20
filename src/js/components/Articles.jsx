import React from 'react';
import { Link } from 'react-router';
import NewsActions from '../actions/NewsActions';
import ArticlesStore from '../stores/ArticlesStore';
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
      sortsBy: []
    };
    this.onChange = this.onChange.bind(this);
  }
  /**
   *
   */
  componentDidMount() {
    NewsActions.allArticles();
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
  onChange(event) {
    const value = event.target.value;
    this.setState({
      articles: ArticlesStore.getAll()
    });
  }
  /**
   *
   */
  render() {
    return (
      <ArticlesList
        articles={this.state.articles} />
    );
  }
}

export default Articles;
