import AppDispatcher from '../dispatcher';
import constants from '../constants/constants';
import NewsApi from '../utils/newsApi';

const NewsActions = {
  allSources() {
    return NewsApi.getSources().then((sources) => {
      AppDispatcher.dispatch({
        type: constants.sources,
        sources
      }, (err) => {
        AppDispatcher.dispatch({
          type: constants.sourcesError,
          err
        });
      });
    });
  },

  categories(category) {
    return NewsApi.getSources(category).then((sources) => {
      AppDispatcher.dispatch({
        type: constants.sources,
        sources
      }, (err) => {
        AppDispatcher.dispatch({
          type: constants.sourcesError,
          err
        });
      });
    });
  },

  allArticles() {
    return NewsApi.getArticles(source, sortBy).then((articles) => {
      AppDispatcher.dispatch({
        type: constants.articles,
        articles
      }, (err) => {
        AppDispatcher.dispatch({
          type: constants.articlesError,
          err
        });
      });
    });
  }
};

export default NewsActions;
