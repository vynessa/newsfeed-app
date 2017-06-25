import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher';
import constants from '../constants/constants.jsx';

const CHANGE_EVENT = 'change';
let _articles = {};

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
    return _articles;
  }
});

AppDispatcher.register((action) => {
  switch (action.type) {
    case constants.articles:
      _articles = action.articles;
      ArticlesStore.emitChange();
      break;
    case constants.articlesError:
      _articles = action.articlesError;
      ArticlesStore.emitChange();
      break;
    default:
  }
});

export default ArticlesStore;
