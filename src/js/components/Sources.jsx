import React from 'react';

import { allSources, allArticles } from '../actions/NewsActions';
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
      sources: SourcesStore.getAll()
    };
  }
  /**
   *
   */
  componentWillMount() {
    SourcesStore.on('change', () => {
      this.setState({
        sources: SourcesStore.getAll()
      });
    });
  }
  /**
   *
   */
  render() {
    const sources = this.state.sources.map((source) => {
      return (
        <div>{source}</div>
      );
    });

    return (
      <div className={sources}>
        <div className="row">
          <div className="col s12 m7">
            <div className="card small">
              <div className="card-image">
                <img src="../public/img/whats-new.jpg" />
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
