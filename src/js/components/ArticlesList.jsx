import React from 'react';
import { Breadcrumb, Row,
          Input, Col,
          Card, CardTitle, MenuItem } from 'react-materialize';
import PropTypes from 'prop-types';
import StringFilter from '../utils/stringFilter';

const strFilter = new StringFilter();
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
    const sortByAvailable = [];
    let sourceId = '';
    if (this.props.articles !== undefined &&
      articles !== undefined) {
      result = articles;
      sortByAvailable.push(sortBy);
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
            {article.description}
          </Card>
        </Col>
      );
    });

    if (sortByAvailable[0] === undefined) {
      return false;
    }

    const sortInput = sortByAvailable[0].map((tag, index) => {
      return <option key={index} value={tag}>{strFilter.filteredStr(tag)}</option>;
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
        Headlines from {strFilter.filteredStr(sourceId)}
        </h1>
        <Row className="center-align">
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
