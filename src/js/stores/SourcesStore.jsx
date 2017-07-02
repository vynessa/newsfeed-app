import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher';
import constants from '../constants/constants.jsx';


/**
 * @description Source store which receives data dispatched from actions
 * @class SourcesStore
 * @extends {EventEmitter}
 */
class SourcesStore extends EventEmitter {
  /**
   * Creates an instance of SourcesStore.
   * @memberof SourcesStore
   */
  constructor() {
    super();
    this.sources = [];
  }

  /**
   * @description Get sources and update this.sources global variable
   * @param {any} sources
   * @memberof SourcesStore
   * @returns {void}
   */
  getSources(sources) {
    this.sources = sources;
    this.emit('change');
  }
  /**
   * @description Get all sources
   * @memberof SourcesStore
   * @returns {object} this.sources
   */
  getAll() {
    return this.sources;
  }
  /**
   * @description Update sources method checks for action type and dispatches accordingly
   * @param {any} action
   * @memberof SourcesStore
   * @returns {void}
   */
  updateSources(action) {
    switch (action.type) {
      case constants.sources:
        this.getSources(action.sources);
        break;
      case constants.sourcesError:
        this.getSources(action.sourcesError);
        break;
      default: // Finir
    }
  }
}

const sourcesStore = new SourcesStore();
AppDispatcher.register(sourcesStore.updateSources.bind(sourcesStore));
export default sourcesStore;
