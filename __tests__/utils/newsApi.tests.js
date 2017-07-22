/* global expect jest */
import newsApi from '../../src/js/utils/newsApi';

const category = 'music';

describe('News Api Test Suite', () => {
  it('should return a promise resolve from the Api for getSources', () => {
    const spy = jest.spyOn(newsApi, 'getSources');
    const getSources = newsApi.getSources();

    expect(spy).toHaveBeenCalled();
    expect(getSources).toEqual(Promise.resolve());
  });

  xit('should return a promise resolve from the Api for getSources(category)', () => {
    const spy = jest.spyOn(newsApi, 'getSources');
    const getSources = newsApi.getSources(category);

    expect(spy).toHaveBeenCalled();
    expect(getSources(category)).toEqual(Promise.resolve());
  });

  it('should return a promise resolve from the Api for getArticles', () => {
    const spy = jest.spyOn(newsApi, 'getArticles');
    const getArticles = newsApi.getArticles();

    expect(spy).toHaveBeenCalled();
    expect(getArticles).toEqual(Promise.resolve());
  });
});
