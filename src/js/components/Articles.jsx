import React from 'react';
import { Row, Input } from 'react-materialize';
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
      articles: []
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
      articles: ArticlesStore.getAll()
    });
  }
  /**
   *
   */
  render() {
    console.log(`articles: ${this.state.articles}`);

    const articles = this.state.articles.map((article, index) => {
      console.log(article);
      return (
        <div key={index}>
          <div className="row">
            <div className="col s12 m4">
              <div className="card small">
                <div className="card-image">
                  <img src={article.urlToImage} />
                  <span className="card-title">{article.name}</span>
                </div>
                <div className="card-content">
                  <p>{article.description}</p>
                </div>
                <div className="card-action">
                  <a href={article.url}>Click to view full article</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Row>
          <Input s={12} type='select' label="Sort Articles By:" defaultValue='1'>
            <option value='1'>Top</option>
            <option value='2'>latest</option>
          </Input>
        </Row>
        <div className="source">{articles}</div>
      </div>
    );
  }
}
