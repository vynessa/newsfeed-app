import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher';
import constants from '../constants/constants.jsx';

// const CHANGE_EVENT = 'change';
// let _sources = {};

// const SourcesStore = Object.assign({}, EventEmitter.prototype, {
//   addChangeListener(callback) {
//     this.on(CHANGE_EVENT, callback);
//   },
//   removeChangeListener(callback) {
//     this.removeListener(CHANGE_EVENT, callback);
//   },
//   emitChange() {
//     this.emit(CHANGE_EVENT);
//   },
//   getAll() {
//     return _sources;
//   }
// });

// AppDispatcher.register((action) => {
//   switch (action.type) {
//     case constants.sources:
//       _sources = action.sources;
//       SourcesStore.emitChange();
//       break;
//     case constants.sourcesError:
//       _sources = action.sourcesError;
//       SourcesStore.emitChange();
//       break;
//     default:
//   }
// });

// export default SourcesStore;

class SourcesStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
    // this.getSources =
  }
  /**
   * 
   */
  getSources(sources) {
    this.sources = sources;
    this.emit('change');
  }
  /**
   * 
   */
  getAll() {
    return this.sources;
  }
  /**
   * 
   * @param {object} action
   */
  updateSources(action) {
    switch (action.type) {
      case constants.sources:
        this.getSources(action.sources);
        break;
      case constants.sourcesError:
        this.getSources(action.sourcesError);
        break;
      default:
    }
  }
}

const sourcesStore = new SourcesStore();
AppDispatcher.register(sourcesStore.updateSources.bind(sourcesStore));
export default sourcesStore;
