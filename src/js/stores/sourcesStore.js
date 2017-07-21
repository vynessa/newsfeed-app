import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher';
import constants from '../constants/constants';

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
    this.sourcesData = {
      sources: [],
      categoryList: []
    };
  }

  /**
   * @description Get sources and update this.sources global variable
   * @param {any} sources
   * @memberof SourcesStore
   * @returns {void}
   */
  getSources(sources, categoryList) {
    this.sourcesData.sources = sources;
    if (categoryList !== undefined) {
      this.sourcesData.categoryList = categoryList;
    }
    this.emit('change');
  }
  /**
   * @description Get all sources
   * @memberof SourcesStore
   * @returns {object} this.sources
   */
  getAll() {
    return this.sourcesData;
  }
  /**
   * @description Update sources method checks for action type and dispatches data accordingly
   * @param {any} action
   * @memberof SourcesStore
   * @returns {void}
   */
  updateSources(action) {
    switch (action.type) {
    case constants.sources:
      this.getSources(action.sources, action.categoryList);
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
