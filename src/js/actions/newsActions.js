import { browserHistory } from 'react-router';
import AppDispatcher from '../dispatcher';
import constants from '../constants/constants';
import NewsApi from '../utils/newsApi';

const firebase = require('firebase/app');
require('firebase/auth');

/**
 * @description News Actions to dispatch actions to stores
 * @function
 */
const NewsActions = {
  /**
   * @description Sources Actions
   * @method
   * @returns {object} sources
   */
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
  /**
   * @description Categories Action
   * @method
   * @param {string} category
   * @returns {object} sources
   */
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
  /**
   * @description Articles Action
   * @method
   * @param {string} sourceKey
   * @param {string} sortBy
   * @returns {object} articles
   */
  allArticles(sourceKey, sortBy) {
    console.log('sourcekey', sourceKey);
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
  /**
   * @description Google Login Action
   * @method
   * @param {string} provider
   * @returns {void}
   */
  loginAuth(provider) {
    firebase.auth().signInWithPopup(provider).then((result) => {
      AppDispatcher.dispatch({
        type: constants.login,
        user: result.user
      }, (err) => {
        AppDispatcher.dispatch({
          type: constants.loginError,
          user: err
        });
      });
    });
  },
  /**
   * @description Google Signout Action
   * @method
   * @return {void}
   */
  signOutAuth() {
    firebase.auth().signOut().then(() => {
      AppDispatcher.dispatch({
        type: constants.signOut
      });
    });
  }
};

export default NewsActions;
