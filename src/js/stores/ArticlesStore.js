import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher';
import constants from '../constants/constants';

const CHANGE_EVENT = 'change';
let articles = {};

const ArticlesStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  getAll() {
    return articles;
  }
});

AppDispatcher.register((action) => {
  switch (action.type) {
    case constants.articles:
      articles = action.articles;
      ArticlesStore.emitChange();
      break;
    case constants.articlesError:
      articles = action.articlesError;
      ArticlesStore.emitChange();
      break;
    default:
  }
});

export default ArticlesStore;
