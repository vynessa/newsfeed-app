import React from 'react';
import { Row, Input, Col, Card, CardTitle } from 'react-materialize';
import PropTypes from 'prop-types';
import ShareArticleButtons from './ShareArticleButtons.jsx';
import Preloader from './Preloader.jsx';

/**
 * @description ArticlesList component
 * @class
 */
class ArticlesList extends React.Component {
  /**
   * 
   * 
   * @returns
   * @memberof ArticlesList
   */
  render() {
    const { articles, sortBy, sourceKey } = this.props.articles;
    const { handleSort } = this.props;
    let result = [];
    let sortByAvailable = [];
    let sourceId = '';
    if (this.props.articles !== undefined &&
      articles !== undefined) {
      result = articles;
      sortByAvailable = sortBy;
      sourceId = sourceKey;
    }
    const renderArticles = result.map((article) => {
      return (
        <Col key ={article.publishedAt} m={6} s={12}>
          <Card
            className='small'
            header={<CardTitle image={article.urlToImage}/>}
            actions={[
              <div>
                <a
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={article.url}>
                  View full article
                </a>
                <br/>
                <br/>
                <div className="col 6">
                  <ShareArticleButtons />
                </div>
              </div>
            ]}>
            <h5 className="article-title">{article.title}</h5>
            {article.description}
            {/* <br/>
            <br/>
            <div>Published On: {article.publishedAt}</div>*/}
          </Card>
        </Col>
      );
    });

    // const getSorted = () => {
    //   NewsActions.allArticles(sourceKey, this.props.sortBy);
    // };

    const sortInput = sortByAvailable.map((tag) => {
      return <option key={tag} value={tag}>{tag}</option>;
    });

    // const sortOption = (e) => {
    //   // e.preventdefault();
    //   console.log(e.target.value);
    //   return e.target.value;
    // };
    console.log(articles);
    return (
      <div >
        <h1 className="center-align" id="heading-text">Headlines from {sourceId.replace(/-/g, ' ')}</h1>
        <Row>
          <Input m={6} s={12}
            type="select"
            onChange={handleSort}
            label="Sort Articles By:">{sortInput}
          </Input>
        </Row>
        <div className="row">{renderArticles}
          </div>
      </div>
    );
  }
}

ArticlesList.defaultProps = {
  articles: [],
  handleSort: ArticlesList.prototype.handleSort,
  sortBy: '',
  sourceKey: ''
};

ArticlesList.propTypes = {
  articles: PropTypes.array,
  handleSort: PropTypes.func,
  sortBy: PropTypes.string,
  sourceKey: PropTypes.string,
};

export default ArticlesList;
