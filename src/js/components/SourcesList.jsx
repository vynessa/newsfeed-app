import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, Row, Input } from 'react-materialize';
import { Link } from 'react-router';
import Preloader from '../components/Preloader.jsx';
import StringFilter from '../utils/stringFilter';


// New instance of StringFilter
const strFilter = new StringFilter();

/**
 * @description Sources child component
 * @class SourcesList
 * @extends {React.Component}
 */
class SourcesList extends React.Component {
  /**
   * @description
   * @returns {JSX.Element} SourcesList
   * @memberof SourcesList
   */
  render() {
    const { sources,
      search,
      categories,
      updateSearch,
      displayArticles,
      sortCategory } = this.props;

    // Create All Sources option tag
    const allSourcesOptionTag = (<option key="" value="">All Sources</option>);

    /**
     * @description Maps categories array through an option tag
     * @returns {array} displayCategories
     */
    const displayCategories = categories.map((category, index) => {
      return <option key={index} value={category}>
              {strFilter.filteredStr(category)}
            </option>;
    });

    displayCategories.unshift(allSourcesOptionTag);

    /**
     * @description Filters through sources to
        return sources if search term index is true
     * @returns {object} filteredSearch
     */
    const filteredSources = sources.filter((source) => {
      return source.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    /**
     * @description maps
     * @param {object} source
     * @returns {object} renderSources
     */
    const renderSources = filteredSources.map((source, index) => {
      return (
        <div key={source.id}>
          <Col m={4} s={12}>
            <Card
              textClassName="white-text"
              title={source.name}
              actions={[<Link
              key={index}
              to={`articles?source=${source.id}&sortBy=${source.sortBysAvailable[0]}`}
              className="btn"
              value={[source.name, source.id]}
              onClick={() => displayArticles(source.id, source.sortBysAvailable)}>
              View headlines</Link>]}>
              {source.description}
            </Card>
          </Col>
        </div>
      );
    });

    const checkSources = () => {
      return (renderSources.length === 0) ?
      <div className="center-align">
        <h4>Oops! Search Term not found :(</h4>
      </div>
      :
      renderSources;
    };

    return (
      <div>
        <div className="center-align">
          <Row>
            <Input
              className="search-content"
              s={3}
              label="Search Sources"
              value={search}
              onChange={updateSearch}/>
            <Input m={3} s={12}
              onChange={sortCategory}
              type="select"
              label="Categories:"
              defaultValue="">
                {displayCategories}
            </Input>
          </Row>
        </div>
        <div className="row">
          { (sources.length === 0) ?
              <div className="center-align">
               <Preloader />
              </div>
            :
            checkSources()
          }
        </div>
        <div className="clearfix"/>
      </div>
    );
  }
}

SourcesList.defaultProps = {
  sources: [],
  search: '',
  categories: [],
  updateSearch: SourcesList.prototype.updateSearch,
  displayArticles: SourcesList.prototype.displayArticles,
  sortCategory: SourcesList.prototype.sortCategory
};

SourcesList.propTypes = {
  sources: PropTypes.array,
  search: PropTypes.string,
  categories: PropTypes.array,
  updateSearch: PropTypes.func,
  displayArticles: PropTypes.func,
  sortCategory: PropTypes.func
};

export default SourcesList;

