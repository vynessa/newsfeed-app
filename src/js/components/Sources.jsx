import React from 'react';
import { Col, Card } from 'react-materialize';
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
      sources: []
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
  /**
   *
   */
  render() {
    // console.log(`sources: ${this.state.sources}`);
    // console.log('Girl');

    let sources = this.state.sources.map((source, index) => {
      // console.log(source);
      return (
          <Col key={`Col-${index}`} m={4} s={12}>
            <Card key={`Card-${index}`} className='teal darken-1' textClassName='white-text' title={source.name} actions={[<a href='#'>This is a link</a>]}>{source.description}
            </Card>
          </Col>
      );
    });

    return (
      <div className="source">{sources}</div>
    );
  }
}
