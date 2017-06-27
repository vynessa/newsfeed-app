import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher';
import constants from '../constants/constants.jsx';

const CHANGE_EVENT = 'change';
let sources = {};

const SourcesStore = Object.assign({}, EventEmitter.prototype, {
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
    return sources;
  }
});

AppDispatcher.register((action) => {
  switch (action.type) {
    case constants.sources:
      sources = action.sources;
      SourcesStore.emitChange();
      break;
    case constants.sourcesError:
      sources = action.sourcesError;
      SourcesStore.emitChange();
      break;
    default:
  }
});

export default SourcesStore;
