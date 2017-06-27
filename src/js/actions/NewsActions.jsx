import AppDispatcher from '../dispatcher';
import constants from '../constants/constants.jsx';
import NewsApi from '../utils/newsApi.jsx';

const NewsActions = {
  allSources() {
    return NewsApi.getSources().then((sources) => {
      AppDispatcher.dispatch({
        type: constants.sources,
        sources
      }, (err) => {
        AppDispatcher.dispatch({
          type: constants.sourcesError,
          sources: err
        });
      });
    });
  },

  getCategories(category) {
    return NewsApi.getSources(category).then((sources) => {
      AppDispatcher.dispatch({
        type: constants.sources,
        sources
      }, (err) => {
        AppDispatcher.dispatch({
          type: constants.sourcesError,
          sources: err
        });
      });
    });
  },

  allArticles(sourceKey, sortBy) {
    console.log('articles', sourceKey);
    console.log('sortBy', sortBy);

    return NewsApi.getArticles(sourceKey, sortBy[0]).then((articles) => {
      AppDispatcher.dispatch({
        type: constants.articles,
        articles: {
          articles,
          sourceKey,
          sortBy
        },
      }, (err) => {
        AppDispatcher.dispatch({
          type: constants.articlesError,
          articles: err
        });
      });
    });
  },

  // getSourceKey(sourceKey) {
  //   console.log('articles2', sourceKey);
  //   AppDispatcher.dispatch({
  //     type: constants.sourceKey,
  //     sourceKey
  //   });
  // }
};

export default NewsActions;
