import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher';
import constants from '../constants/constants.jsx';

/**
 * 
 */
class ArticlesStore extends EventEmitter {
  /**
   * 
   */
  constructor() {
    super();
    this.articles = {};
    // this.sourceKey = '';
  }
  /**
   * 
   * @param {object} articles
   */
  getArticles(articles) {
    this.articles = articles;
    this.emit('change');
  }
  /**
   * 
   */
  getAll() {
    return this.articles;
  }
  /**
   * 
   * @param {string} sourceKey
   */
  // setSourceKey(sourceKey) {
  //   this.sourceKey = sourceKey;
  //   localStorage.setItem('source_key', sourceKey);
  // }
  /**
   * 
   */
  // getSourceKey() {
  //   return this.sourceKey;
  // }
  /**
   * 
   * @param {object} action
   */
  updateArticles(action) {
    switch (action.type) {
      case constants.articles:
        this.getArticles(action.articles);
        break;
      case constants.articlesError:
        this.getArticles(action.articlesError);
        break;
      // case constants.sourceKey:
      //   this.sourceKey(action.sourceKey);
      //   break;
      default: break;
    }
  }
}
// console.log(typeof ArticlesStore.getSourceKey);
const articlesStore = new ArticlesStore();
AppDispatcher.register(articlesStore.updateArticles.bind(articlesStore));
export default articlesStore;
