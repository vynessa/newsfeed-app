import AppDispatcher from '../dispatcher';
import constants from '../constants/constants';
import NewsApi from '../utils/newsApi';
import Categories from '../utils/getCategories';

const firebase = require('firebase/app');

// Create new instance of Category class
const categoryClass = new Categories();

/**
 * @description News Actions to dispatch actions to stores
 * @function
 */
const NewsActions = {
  /**
   * @description Sources Actions
   * @param {string} category
   * @method
   * @returns {object} sources
   */
  allSources(category) {
    if (category) {
      return NewsApi.getSources(category).then((sources) => {
        AppDispatcher.dispatch({
          type: constants.sources,
          sources,
        });
      });
    }
    return NewsApi.getSources().then((sources) => {
      const categoryList = categoryClass.sortCategories(sources);
      AppDispatcher.dispatch({
        type: constants.sources,
        sources,
        categoryList
      });
    });
  },

  /**
   * @description Articles Action
   * @method
   * @param {string} sourceId
   * @param {string} sortBy
   * @returns {object} articles
   */
  allArticles(sourceId, sortBy = 'top') {
    return NewsApi.getArticles(sourceId, sortBy).then((articles) => {
      AppDispatcher.dispatch({
        type: constants.articles,
        articles
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
