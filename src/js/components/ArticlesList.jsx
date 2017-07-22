import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Row,
          Input, Col,
          Card, CardTitle, MenuItem } from 'react-materialize';
import StringFilter from '../utils/stringFilter';
import Preloader from './Preloader.jsx';


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
    const sortBys = JSON.parse(localStorage.sortBys);
    const sortByAvailable = sortBys;

    // const {  } = this.props.articles;
    const { articles, handleSort, sourceKey } = this.props;

    let result = [];

    if (this.props.articles !== undefined &&
      articles !== undefined) {
      result = articles;
    }

    const renderArticles = result.map((article, index) => {
      return (
        <Col key ={`col-${index}`} m={6} s={12}>
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

    const sortInput = sortByAvailable.map((tag, index) => {
      return <option key={`article-${index}`} value={tag}>
                {strFilter.filteredStr(tag)}
              </option>;
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
         Headlines from {strFilter.filteredStr(sourceKey)}
        </h1>
        <Row className="center-align">
          <Input m={6} s={12}
            type="select"
            onChange={handleSort}
            label="Sort Articles By:">
               { sortInput }
          </Input>
        </Row>
        <div className="row">
          {
            articles.length === 0 ?
            <div className="center-align">
               <Preloader />
              </div>
            :
            renderArticles
          }
          </div>
      </div>
    );
  }
}

ArticlesList.defaultProps = {
  articles: [],
  handleSort: ArticlesList.prototype.handleSort,
  sortBy: '',
  source: ''
};

ArticlesList.propTypes = {
  articles: PropTypes.array,
  handleSort: PropTypes.func,
  sortBy: PropTypes.string,
  source: PropTypes.string,
};

export default ArticlesList;
