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
      articles: []
    };
    this.onChange = this.onChange.bind(this);
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
   */
  render() {
    console.log('state', this.state);
    return (
      <ArticlesList
        articles={this.state.articles} />
    );
  }
}

export default Articles;
