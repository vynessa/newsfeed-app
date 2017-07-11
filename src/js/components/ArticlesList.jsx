import React from 'react';
import { Breadcrumb, Row,
          Input, Col,
          Card, CardTitle, MenuItem } from 'react-materialize';
import PropTypes from 'prop-types';

/**
 * @description ArticlesList component
 * @class
 */
class ArticlesList extends React.Component {
  /**
   * @returns {JSX.Element} ArticlesList
   * @memberof ArticlesList
   */
  render() {
    const { articles, sortBy, source } = this.props.articles;
    const { handleSort } = this.props;
    let result = [];
    let sortByAvailable = [];
    let sourceId = '';
    if (this.props.articles !== undefined &&
      articles !== undefined) {
      result = articles;
      sortByAvailable = sortBy;
      sourceId = source;
    }
    const renderArticles = result.map((article, index) => {
      return (
        <Col key ={article.publishedAt} m={6} s={12}>
          <Card
            className="small"
            header={<CardTitle image={article.urlToImage}/>}
            actions={[
              <div key={index}>
                <a
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={article.url}>
                  View full article
                </a>
              </div>
            ]}>
            <h5 className="article-title">{article.title}</h5>
            {article.description.substr(0, 70)}
          </Card>
        </Col>
      );
    });

    const sortInput = sortByAvailable.map((tag) => {
      return <option key={tag} value={tag}>{tag}</option>;
    });

    return (
      <div>
        <div className="clearfix"/>
        <Breadcrumb className="fixed">
          <MenuItem id="sources" href="sources">Sources</MenuItem>
          <MenuItem id="articles">Articles</MenuItem>
        </Breadcrumb>
        <h1
        className="center-align"
        id="heading-text">
        Headlines from {sourceId.replace(/-/g, ' ')}
        </h1>
        <Row>
          <Input m={6} s={12}
            type="select"
            onChange={handleSort}
            label="Sort Articles By:">
            {sortInput}
          </Input>
        </Row>
        <div className="row">
          {renderArticles}
          </div>
      </div>
    );
  }
}

ArticlesList.defaultProps = {
  // articles: {},
  handleSort: ArticlesList.prototype.handleSort,
  sortBy: '',
  source: ''
};

ArticlesList.propTypes = {
  // articles: PropTypes.object,
  handleSort: PropTypes.func,
  sortBy: PropTypes.string,
  source: PropTypes.string,
};

export default ArticlesList;
