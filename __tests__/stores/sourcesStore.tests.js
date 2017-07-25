/* global expect jest describe it beforeEach */
import expects from 'expect';
import dispatcher from '../../src/js/dispatcher';
import sourcesMock from '../../__mocks__/mockSources.json';
import sourcesStore from '../../src/js/stores/sourcesStore';
import constants from '../../src/js/constants/constants';

jest.mock('../../src/js/dispatcher');

describe('Sources Store Test Suite', () => {
  let callback;

  const sources = {
    type: constants.sources,
    sources: sourcesMock
  };

  beforeEach(() => {
    callback = dispatcher.register.mock.calls[0][0];
  });

  it('should exist', () => {
    expects(sourcesStore).toExist();
  });

  it('should register a call with the dispatcher', () => {
    expect(dispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no sources', () => {
    expect(sourcesStore.sourcesData.sources.length).toEqual(0);
  });

  it('should return the length of all sources', () => {
    callback(sources);
    expect(sourcesStore.getAll().sources.length).toBe(8);
  });

  it('should return the appropriate sources array when #getAll is called', () => {
    callback(sources);
    expect(sourcesStore.getAll().sources).toEqual(sourcesMock);
  });
});

