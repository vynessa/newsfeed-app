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

  it('should return the appropraite result', () => {
    callback(articles);
    expect(articlesStore.getAll().length).toBe(3);
    expect(articlesStore.getAll()).toEqual(articlesMock);
  });
});

// import expect from 'expect';
// import articlesStore from '../../src/js/stores/articlesStore';
// import constants from '../../src/js/constants/constants';
// import './../../__mocks__/browserMocks';
// import articles from './../../__mocks__/mockArticles.json';

// jest.dontMock('../../src/js/stores/articlesStore.js');

// describe('Articles Store suite', () => {
//   describe('When', () => {
//     localStorage.setItem('sourceKey', articles.articles);

//     it('should exist', () => {
//       expect(articlesStore).toExist();
//     });

//     it('should be truthy', () => {
//       articlesStore.getArticles(articles);
//       expect(articles.sourcekey).toEqual('abc-news-au');
//     });

//     // it('should equal zero', () => {
//     //   expect(articlesStore.getAll().length).toEqual([]);
//     // });

    // it('should be defined', () => {
      // expect(articlesStore.getSourceKey).toBeDefined('function');
    // });
//   });
// });
