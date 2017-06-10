import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher';
import constants from '../constants/constants';

/**
 * @class
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
   * @method getAll
   */
  getAll() {
    return this.sources;
  }
  /**
   * 
   * @param {*} sources 
   */
  getSources(sources) {
    this.sources = sources;
    this.emit('change');
  }
}

const sourcesStore = new SourcesStore();

export default sourcesStore;
