/* global expect */
import AppDispatcher from '../../src/js/dispatcher';
import SourcesStore from '../../src/js/stores/sourcesStore';
import sourcesConstants from '../../src/js/constants/constants';
import sourcesMock from '../../__mocks__/mockSources.json';

jest.dontMock('../../src/js/stores/sourcesStore');
// jest.mock('../../src/js/constants/constants');
// jest.dontMock('react/lib/merge');

describe('Sources Store', () => {
//   describe('it should get dispatched data in Source store', () => {
  let callback;

  const actionGetSources = {
    type: sourcesConstants.sources,
    sources: sourcesMock
  };

  beforeEach(() => {
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('should register a callback with the dispatcher', () => {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no source', () => {
    // let sourcesStore = new SourcesStore();
    const all = SourcesStore.getAll();
    expect(all.length).toBe(0);
  });

  it('should return the appropriate result', () => {
    callback(actionGetSources);
    expect(sourcesStore.getAll().length).toBe(7);
    expect(sourcesStore.getAll()).toEqual(sourcesMock);
  });
});
