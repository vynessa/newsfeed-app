import React from 'react';
import { Link } from 'react-router';
import { Row, Input, Col, Card, CardTitle } from 'react-materialize';

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
    const articles = result.map((article, index) => {
      return (
        <Col key={index} m={6} s={12}>
          <Card key ={article.author}
            className='small hoverable'
            header={<CardTitle image={article.urlToImage}>{article.title}</CardTitle>}
            actions={[
              <a className="btn"
                target="_blank"
                rel="noopener"
                href={article.url}>
                View full article
              </a>
            ]}>
            {article.description}
            <br/>
            <br/>
            <div>Author: {article.author}</div>
            <div>Published On: {article.publishedAt}</div>
          </Card>
        </Col>
      );
    });

    const heading = result.map((article) => { return <h1>{article.id}</h1>; });

    const sortInput = sortByAvailable.map((tag) => {
      return <option value={tag}>{tag}</option>;
    });

    return (
      <div >
        <div>{heading}</div>
        <Row>
          <Input m={6} s={12}
            type="select"
            onChange={this.props.sortOptions}
            label="Sort Articles By:">{sortInput}
          </Input>
        </Row>
        <div className="row">{articles}</div>
      </div>
    );
  }
}

export default ArticlesList;
