import React from 'react';
import { Link } from 'react-router';
import { Row, Input, Col, Card, CardTitle } from 'react-materialize';
import NewsActions from '../actions/NewsActions';
import ArticlesStore from '../stores/ArticlesStore';

/**
 * @class
 * @param
 */
export default class ArticlesList extends React.Component {
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
  onChange() {
    this.setState({
      articles: ArticlesStore.getAll()
    });
  }
  /**
   *
   */
  render() {
    const articles = this.state.articles.map((article) => {
      return (
        <Col key={article.id} m={6} s={12}>
          <Card className='small'
            header={<CardTitle image={article.urlToImage}>{article.name}</CardTitle>}
            actions={[<a className="btn brown" target="_blank" rel="noopener" href={article.url}>View full article</a>]}>
            {article.description}
          </Card>
        </Col>
      );
    });

    return (
      <div >
        <h1>The Next Web</h1>
        <Row>
          <Input m={3} s={12} type="select" label="Sort Articles By:" defaultValue='1'>
            <option value="1">Top</option>
            <option value="2">Latest</option>
          </Input>
        </Row>
        <div className="row">{articles}</div>
      </div>
    );
  }
}
