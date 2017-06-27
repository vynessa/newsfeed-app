import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher';
import constants from '../constants/constants.jsx';

/**
 * 
 */
class SourcesStore extends EventEmitter {
  /**
   * 
   */
  constructor() {
    super();
    this.sources = [];
  }
  /**
   * 
   * @param {object} sources
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
