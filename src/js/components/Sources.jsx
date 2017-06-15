import React from 'react';
import { Col, Card, Row, Input } from 'react-materialize';
import css from '../../../public/css/main.scss';
import NewsActions from '../actions/NewsActions';
import SourcesStore from '../stores/SourcesStore';

/**
 * @class
 * @param
 */
export default class Sources extends React.Component {
  /**
   *
   */
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      search: ''
    };
    this.onChange = this.onChange.bind(this);
  }
  /**
   *
   */
  componentWillMount() {
    NewsActions.allSources();
    SourcesStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    SourcesStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      sources: SourcesStore.getAll()
    });
  }

  updateSearch(e) {
    this.setState({
      search: e.target.value.substr(0, 20)
    });
  }
  /**
   *
   */
  render() {
    const filteredSearch = this.state.sources.filter((source) => {
      return source.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });

    const sources = filteredSearch.map((source) => {
      return (
        <div key={source.id} className='row'>
          <Col m={4} s={12}>
            <Card className='teal darken-1'
                  textClassName='white-text'
                  title={source.name}
                  actions={[<a href='#'>View headlines</a>]}>
              {source.description}
            </Card>
          </Col>
        </div>
      );
    });

    return (
      <div className="sources">
        <div>
          <Row>
            <Input
              s={3}
              label="Search Sources"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}/>
          </Row>
        </div>
        <div>{sources}</div>
      </div>
    );
  }
}
