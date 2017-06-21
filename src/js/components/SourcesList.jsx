import React from 'react';
import { Col, Card, Row, Input, Pagination } from 'react-materialize';
import { Link } from 'react-router';
// import Preloader from '../components/Preloader.jsx';

/**
 * @class
 * @param
 */
class SourcesList extends React.Component {
  // pagination(currentPage) {
  //   this.setState({
  //     currentPage
  //   });
  // }
  /**
   *
   */
  render() {
    /** Search filter function
     * @function
     * @param {object} source
     * @returns
     */
    const filteredSearch = this.props.sources.filter((source) => {
      return source.name.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
    });

    /** Source Function
     * @function
     * @param {object} source
     * @returns
     */
    const renderSources = filteredSearch.map((source) => {
      return (
        <div>
          <Col m={4} s={12}>
            <Card key={source.id} className='teal'
              textClassName='white-text'
              title={source.name}
              actions={[<Link to='articles'
              className='btn'
              onClick={() => this.props.btnClick(source.id, source.sortBysAvailable)}>View headlines</Link>]}>
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
        <div>
          <Row className="center-align">
            <Input
              className="search-content"
              s={3}
              label="Search Sources"
              value={this.props.search}
              onChange={this.props.updateSearch}>
            </Input>
            <Input m={3} s={12}
              onChange={this.props.handleCategory}
              type='select' label="Categories:"
              defaultValue='1'>
                <option value='1'>Choose Category</option>
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
        <div className="row">{renderSources}</div>
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

export default SourcesList;

