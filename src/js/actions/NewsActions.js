import AppDispatcher from '../dispatcher';
import constants from '../constants/constants';
import { getSources, getArticles } from '../utils/newsApi';

export default {
  allSources: () => {
    return getSources().then((sources) => {
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

  allArticles: () => {
    return getArticles().then((articles) => {
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

