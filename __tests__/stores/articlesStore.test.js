/* global expect jest describe it beforeEach */
import AppDispatcher from '../../src/js/dispatcher';
import articlesStore from '../../src/js/stores/articlesStore';
// import articlesConstants from '../../src/js/constants/constants';
import articlesMock from './mocks/mockArticle.json';


jest.mock('../../src/js/stores/articlesStore');
describe('Articles Store', () => {
  describe('it should get dispatched data in articles store', () => {
    let callback;
    const actionGetArticles = {
      type: 'GET_ARTICLES',
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

