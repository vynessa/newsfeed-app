/* global expect jest describe it beforeEach */
import AppDispatcher from '../../src/js/dispatcher';
import authStore from '../../src/js/stores/authStore';
import articlesConstants from '../../src/js/constants/constants';
// import articlesMock from '../../__mocks__/mockSources.json';


jest.dontMock('../../src/js/stores/authStore');
describe('Authentication Store', () => {
  describe('it should get dispatched data in articles store', () => {
    let callback;
    const actionGetArticles = {
      actionType: articlesConstants.articles,
      articles: articlesMock
    };

    beforeEach(() => {
      callback = AppDispatcher.register.mock.calls[0][0];
    });

    it('registers a callback with the dispatcher', () => {
      expect(AppDispatcher.register.mock.calls.length).toBe(1);
    });

    it('should initialize with no article', () => {
      expect(articlesStore.getArticles()).toEqual({});
    });

    it('should return the appropriate result', () => {
      callback(actionGetArticles);
      expect(articlesStore.getArticles().length).toBe(3);
      expect(articlesStore.getArticles()).toEqual(articlesMock);
    });
    // it('initializes with no to-do items', () => {
    //   const all = articlesStore.getAll();
    //   expect(all).toEqual({});
    // });
  });
});


