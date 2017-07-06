import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, Row, Input, Pagination } from 'react-materialize';
import { Link } from 'react-router';
import Preloader from '../components/Preloader.jsx';

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
      updateSearch,
      btnClick,
      handleCategory } = this.props;

    /** Search filter function
     * @function
     * @param {object} source
     * @returns {object} filteredSearch
     */
    const filteredSearch = sources.filter((source) => {
      return source.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    /** Source Function
     * @function
     * @param {object} source
     * @returns {object} renderSources
     */
    const renderSources = filteredSearch.map((source) => {
      return (
        <div>
          <Col m={4} s={12}>
            <Card key={source.id}
              textClassName='white-text'
              title={source.name}
              actions={[<Link to={`articles?source=${source.id}&sortBy=${source.sortBysAvailable[0 ]}`}
              className='btn'
              value={[source.name, source.id]}
              onClick={() => btnClick(source.id, source.sortBysAvailable)}>View headlines</Link>]}>
              {source.description}
            </Card>
          </Col>
        </div>
      );
    });

    // Set variables for pagination function
    // const { sources, currentPage } = this.state;
    // let allSources = sources;
    // const totalSources = allSources.length;
    // const sourcePerPage = 6;
    // const end = currentPage * sourcePerPage;
    // const start = end - sourcePerPage;
    // allSources = allSources.slice(start, end);

    return (
      <div>
        <div className="center-align">
          <Row>
            <Input
              className="search-content"
              s={3}
              label="Search Sources"
              value={search}
              onChange={updateSearch}>
            </Input>
            <Input m={3} s={12}
              onChange={handleCategory}
              type='select' label="Categories:"
              defaultValue=''>
                <option value=''>All Sources</option>
                <option value='business'>Business</option>
                <option value='entertainment'>Entertainment</option>
                <option value='gaming'>Gaming</option>
                <option value='general'>General</option>
                <option value='music'>Music</option>
                <option value='politics'>Politics</option>
                <option value='science-and-nature'>Science and Nature</option>
                <option value='sport'>Sport</option>
                <option value='technology'>Technology</option>
            </Input>
          </Row>
        </div>
        <div className="row">{ (sources.length === 0) ?
          <div className="center-align"><Preloader /></div>
          : renderSources }
          </div>
        <div className="clearfix"></div>
        {/*<div>
        <Pagination
          className="center-align"
          items={Math.ceil(sources.length / sourcePerPage)}
          activePage={currentPage}
          onSelect={(current) => { this.changePage(current); } } />
        </div>*/}
      </div>
    );
  }
}

SourcesList.defaultProps = {
  sources: [],
  search: '',
  updateSearch: SourcesList.prototype.updateSearch,
  btnClick: SourcesList.prototype.btnClick,
  handleCategory: SourcesList.prototype.handleCategory
};

SourcesList.propTypes = {
  sources: PropTypes.array,
  search: PropTypes.string,
  updateSearch: PropTypes.func,
  btnClick: PropTypes.func,
  handleCategory: PropTypes.func
};

export default SourcesList;

