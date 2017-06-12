import React from 'react';
import NewsActions from '../actions/NewsActions';
import ArticlesStore from '../stores/ArticlesStore';

/**
 * @class
 * @param
 */
export default class Articles extends React.Component {
  /**
   *
   */
  constructor(props) {
    super(props);
    this.state = {
      articles: ArticlesStore.getAll()
    };
    this.onChange = this.onChange.bind(this);
  }
  /**
   *
   */
  componentWillMount() {
    // SourcesStore.on('change', () => {
    //   this.setState({
    //     sources: SourcesStore.getAll()
    //   });
    // });
    NewsActions.allArticles();
    ArticlesStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    ArticlesStore.removeChangeListener(this.onChange);
  }
  onChange() {
    this.setState({
      sources: ArticlesStore.getAll()
    });
  }
  /**
   *
   */
  render() {
    // console.log(`sources: ${this.state.sources}`);
    // console.log('Girl');

    let articles = this.state.sources.map((article, index) => {
      // console.log(source);
      return (
        <div key={index}>
          <div className="row">
            <div className="col s12 m7">
              <div className="card small">
                <div className="card-image">
                  <img src="../public/img/whats-new.jpg" />
                  <span className="card-title">{articles.name}</span>
                </div>
                <div className="card-content">
                  <p>{articles.description}</p>
                </div>
                <div className="card-action">
                  <a href="#">Click to view Articles</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="source">{articles}</div>
    );
  }
}
