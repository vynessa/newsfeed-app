/* global expect jest */
import dispatcher from '../../src/js/dispatcher';
import newsActions from '../../src/js/actions/newsActions';
import newsApi from '../../src/js/utils/newsApi';
import sources from '../../__mocks__/mockSources.json';
import sourcesCategory from '../../__mocks__/mockSourcesCategory.json';
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

const category = 'music';

describe('NewsActions Test Suite', () => {
  it('should call newsActions.getSources() on getSources', () => {
    newsActions.allSources();
    expect(newsApiGetSources.mock.calls.length).toBe(1);
  });

  it('should call newsActions.getArticles()', () => {
    newsActions.allArticles();
    expect(newsApiGetArticles.mock.calls.length).toBe(1);
  });

  it('should call newsActions.getSources(category) on getSources', () => {
    newsActions.allSources(category);
    expect(newsApiGetSources.mock.calls.length).toBe(2);
  });

  it('should dispatch appropriate action type for allSources when called', () => {
    newsActions.allSources();
    const action = dispatchSpy.mock.calls[0][0];
    expect(dispatchSpy).toHaveBeenCalled();
    expect(action.type).toEqual(constants.sources);
  });

  it('should dispatch appropriate action type for allArticles when called', () => {
    newsActions.allArticles();
    const action = dispatchSpy.mock.calls[1][0];
    expect(dispatchSpy).toHaveBeenCalled();
    expect(action.type).toEqual(constants.articles);
  });

  it('should dispatch appropriate action type for allSources when called', () => {
    newsActions.allSources(category);
    const action = dispatchSpy.mock.calls[0][0];
    expect(dispatchSpy).toHaveBeenCalled();
    expect(action.type).toEqual(constants.sources);
  });
});

// jest.mock('pathToFireBase', () => ({
//    signInWithEmailAndPassword(email,password){
//      if(password === 'correct') {
//        return Promise.resolve({name: 'someUser'})
//      } else {
//        return Promise.reject({error: 'someError'})
//      }
//    }
// }))

