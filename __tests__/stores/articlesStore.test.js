import expect from 'expect';
import articlesStore from '../../src/js/stores/articlesStore';
import constants from '../../src/js/constants/constants';
import './../../__mocks__/browserMocks';
import articles from './../../__mocks__/mockArticles.json';

jest.dontMock('../../src/js/stores/articlesStore.js');

describe('Articles Store suite', () => {
  describe('When', () => {
    localStorage.setItem('sourceKey', articles.articles);

    it('should exist', () => {
      expect(articlesStore).toExist();
    });

    it('should be truthy', () => {
      articlesStore.getArticles(articles);
      expect(articles.sourcekey).toEqual('abc-news-au');
    });

    // it('should equal zero', () => {
    //   expect(articlesStore.getAll().length).toEqual([]);
    // });

    // it('should be defined', () => {
    //   expect(articlesStore.getSourceKey).toBeDefined('function');
    // });
  });
});
