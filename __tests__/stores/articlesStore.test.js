/* global expect jest describe it beforeEach */
import expects from 'expect';
import dispatcher from '../../src/js/dispatcher';
import articlesMock from '../../__mocks__/mockArticles.json';
import articlesStore from '../../src/js/stores/articlesStore';
import constants from '../../src/js/constants/constants';


jest.mock('../../src/js/dispatcher');
describe('Articles Store Test Suite', () => {
  let callback;

  const articles = {
    type: constants.articles,
    articles: articlesMock
  };

  beforeEach(() => {
    callback = dispatcher.register.mock.calls[0][0];
  });

  it('should exist', () => {
    expects(articlesStore).toExist();
  });

  it('should register a call with the dispatcher', () => {
    expect(dispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no article', () => {
    expect(articlesStore.articles.length).toBe(0);
  });

  it('should return the length of all articles', () => {
    callback(articles);
    expect(articlesStore.getAll().length).toBe(3);
  });

  it('should return the appropriate articles array when #getAll is called', () => {
    callback(articles);
    expect(articlesStore.getAll()).toEqual(articlesMock);
  });
});

