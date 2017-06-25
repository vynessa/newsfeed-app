import AppDispatcher from '../dispatcher';
import constants from '../constants/constants.jsx';
import NewsApi from '../utils/newsApi.jsx';

const NewsActions = {
  allSources: () => {
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

  categories: (category) => {
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

  getSourceKey: (sourceKey) => {
    AppDispatcher.dispatch({
      type: constants.sourceKey,
      sourceKey
    });
  },

  allArticles: (source, sortBy) => {
    console.log('articles', sortBy);
    return NewsApi.getArticles(source, sortBy[0]).then((articles) => {
      AppDispatcher.dispatch({
        type: constants.articles,
        articles: {
          articles,
          sortBy,
          source
        },
      }, (err) => {
        AppDispatcher.dispatch({
          type: constants.articlesError,
          articles: err
        });
      });
    });
  }
};

export default NewsActions;
