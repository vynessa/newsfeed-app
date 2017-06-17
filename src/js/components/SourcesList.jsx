import React from 'react';
import { Col, Card, Row, Input, Pagination } from 'react-materialize';
import NewsActions from '../actions/NewsActions';
import SourcesStore from '../stores/SourcesStore';
import Preloader from '../components/Preloader.jsx';
import browserHstory from 'react-router';

/**
 * @class
 * @param
 */
class Sources extends React.Component {
  /**
   *
   */
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      search: ''
      // currentPage: 1
    };
    this.handleCategory = this.handleCategory.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  /**
   *
   */
  componentDidMount() {
    NewsActions.allSources();
    SourcesStore.addChangeListener(this.onChange);
  }
  /**
   * 
   */
  componentWillUnmount() {
    SourcesStore.removeChangeListener(this.onChange);
  }
  /**
   * 
   */
  onChange() {
    this.setState({
      sources: SourcesStore.getAll()
    });
  }
  /**
   * 
   * @param {*} event
   */
  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }

  articleClick() {
    browserHstory.push('/articles');
  }

  handleCategory(event) {
    return (event.target.value === '1') ? Materialize.toast('Select a valid category', 4000, 'rounded') : NewsActions.category(event.target.value)
  }

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
    const filteredSearch = this.state.sources.filter((source) => {
      return source.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
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
            <Card key={source.id} className='teal darken-1'
              textClassName='white-text'
              title={source.name}
              actions={[<a onClick={this.articleClick} href='/articles'>View headlines</a>]}>
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
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}>
            </Input>
            <Input onChange={this.handleCategory} m={3} s={12} type='select' label="Categories:" defaultValue='1'>
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
          onSelect={(current) => { this.changePage(current); } }/>
        </div>*/}
      </div>
    );
  }
}

export default Sources;

