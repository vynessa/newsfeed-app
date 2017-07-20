import expects from 'expect';

import sourcesStore from '../../src/js/stores/sourcesStore';
import sourcesMock from '../../__mocks__/mockSources.json';
import constants from '../../src/js/constants/constants';

jest.dontMock('../../src/js/stores/sourcesStore.js');

describe('Sources Store suite', () => {
  describe('', () => {
    it('should exist', () => {
      expects(sourcesStore).toExist();
    });

    it('should be undefined', () => {
      expect(sourcesStore.getSources()).toBe(undefined);
    });

    it('should be an empty array', () => {
      expect(sourcesStore.getAll().sources).toBe([]);
    });
  });
});
