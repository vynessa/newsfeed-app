import React from 'react';
import { Link } from 'react-router';
import { Row, Input, Col, Card, CardTitle } from 'react-materialize';
import PropTypes from 'prop-types';
import ShareArticleButtons from './ShareArticleButtons.jsx';

/**
 * @class
 * @param
 */
class ArticlesList extends React.Component {
  /**
   *
   */
  render() {
    console.log('props', this.props);
    let result = [];
    let sortByAvailable = [];
    if (this.props.articles !== undefined &&
      this.props.articles.articles !== undefined) {
      result = this.props.articles.articles;
      sortByAvailable = this.props.articles.sortBy;
    }
    const articles = result.map((article) => {
      return (
        <Col key ={article.publishedAt} {...article} m={6} s={12}>
          <Card
            className='small'
            header={<CardTitle image={article.urlToImage}/>}
            actions={[
              <a
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
                href={article.url}>
                View full article
              </a>
            ]}>
            <h5 className="article-title">{article.title}</h5>
            {article.description}
            <br/>
            <br/>
            <div className="col 6">
              <ShareArticleButtons />
            </div>
            {/* <br/>
            <br/>
            <div>Published On: {article.publishedAt}</div>*/}
          </Card>
        </Col>
      );
    });

    const heading = result.map((article) => { return <h1>{article.id}</h1>; });

    const sortInput = sortByAvailable.map((tag) => {
      return <option key={tag} value={tag}>{tag}</option>;
    });

    return (
      <div >
        <div>{heading}</div>
        <Row>
          <Input m={6} s={12}
            type="select"
            onChange={this.props.sortOption}
            label="Sort Articles By:">{sortInput}
          </Input>
        </Row>
        <div className="row">{articles}</div>
      </div>
    );
  }
}

export default ArticlesList;
