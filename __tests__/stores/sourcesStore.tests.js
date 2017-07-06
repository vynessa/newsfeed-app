/* global expect jest describe it beforeEach */
import AppDispatcher from '../../src/js/dispatcher';
import sourcesStore from '../../src/js/stores/sourcesStore';
// import sourcesConstants from '../../src/js/constants/constants';
import sourcesMock from './mocks/mockSources.json';


jest.dontMock('../../src/js/stores/sourcesStore');
describe('Sources Store', () => {
//   describe('it should get dispatched data in Source store', () => {
  let callback;

  const actionGetSources = {
    type: 'GET_SOURCES',
    sources: sourcesMock
  };

  beforeEach(() => {
    // AppDispatcher = require('../../src/js/dispatcher');
    // sourcesStore = require('../../src/js/stores/sourcesStore');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('should register a callback with the dispatcher', () => {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no source', () => {
    const all = sourcesStore.getAll();
    expect(all).toEqual([]);
  });

  it('should return the appropriate result', () => {
    callback(actionGetSources);
    expect(sourcesStore.getAll().length).toBe(7);
    expect(sourcesStore.getAll()).toEqual(sourcesMock);
  });
});
