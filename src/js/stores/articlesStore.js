import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher';
import constants from '../constants/constants';

/**
 * @description Articles store which recieves data dispatches from actions
 * @class ArticlesStore
 * @extends {EventEmitter}
 */
class ArticlesStore extends EventEmitter {
  /**
   * Creates an instance of ArticlesStore.
   * @memberof ArticlesStore
   */
  constructor() {
    super();
    this.articles = [];
  }
  /**
   * @description
   * @method
   * @param {object} articles
   * @returns {void}
   */
  getArticles(articles) {
    this.articles = articles;
    this.emit('change');
  }

  /**
   * @description
   * @returns {object} this.articles
   * @memberof ArticlesStore
   */
  getAll() {
    return this.articles;
  }

  /**
   * @description Articles store
   * @param {any} action
   * @memberof ArticlesStore
   * @returns {void}
   */
  updateArticles(action) {
    switch (action.type) {
      case constants.articles:
        this.getArticles(action.articles);
        break;
      case constants.articlesError:
        this.getArticles(action.articlesError);
        break;
      default: // Finir
    }
  }
}
const articlesStore = new ArticlesStore();
AppDispatcher.register(articlesStore.updateArticles.bind(articlesStore));
export default articlesStore;
