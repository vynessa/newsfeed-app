/* global expect jest test */
import dispatcher from '../../src/js/dispatcher';
import newsActions from '../../src/js/actions/newsActions';
import newsApi from '../../src/js/utils/newsApi';
import sources from '../../__mocks__/mockSources.json';
import articles from '../../__mocks__/mockArticles.json';
import constants from '../../src/js/constants/constants';

// Mock the dispatcher and newsApi.
jest.mock('../../src/js/dispatcher');
jest.mock('../../src/js/utils/newsApi');

const newsApiGetSources = newsApi.getSources;
const newsApiGetArticles = newsApi.getArticles;

newsApiGetSources.mockReturnValue(Promise.resolve(sources));
newsApiGetArticles.mockReturnValue(Promise.resolve(articles));

const dispatchSpy = jest.spyOn(dispatcher, 'dispatch');

describe('NewsActions', () => {
  test('should call newsActions.getSources() on getSources', () => {
    newsActions.allSources();
    expect(newsApiGetSources.mock.calls.length).toBe(1);
  });

  test('should call newsActions.getArticles()', () => {
    newsActions.allArticles();
    expect(newsApiGetArticles.mock.calls.length).toBe(1);
  });

  test('should dispatch appropriate action type when called', () => {
    newsActions.allSources();
    const action = dispatchSpy.mock.calls[0][0];
    expect(dispatchSpy).toHaveBeenCalled();
    expect(action.type).toEqual(constants.sources);
  });

  test('should dispatch appropriate action type when called', () => {
    newsActions.allArticles();
    const action = dispatchSpy.mock.calls[1][0];
    expect(dispatchSpy).toHaveBeenCalled();
    expect(action.type).toEqual(constants.articles);
  });
});
