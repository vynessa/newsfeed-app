// /* global jest test */
// import expect from 'expect';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import NewsApi from '../../src/js/utils/newsApi';
// import mockedSources from '../../__mocks__/mockSources.json';

// // const mockAdapter = new MockAdapter(axios);
// jest.mock('../../__mocks__/mockSources.json');
// const url = 'https://newsapi.org/v1/sources';
// // const categoryUrl = `https://newsapi.org/v1/sources?category=${category}`;

// describe('News API Suite', () => {
//   describe('Given a API with key Sources', () => {
//     describe('When the getSources method is called', () => {
//       it('Then returns the first index name as `ABC News (AU)`', (done) => {
//         const mockAdapter = new MockAdapter(axios);

//         mockAdapter.onGet(url).reply(200, mockedSources);
//         const sourcesResponse = NewsApi.getSources();
//         console.log('mockedSources: ', mockedSources[0]);
//         console.log('sourcesResponse: ', sourcesResponse);

//         // setTimeout(() => {
//         expect(sourcesResponse.mockedSources[0].name).toBe('ABC News (AU)');
//         done();
//         // }, 0);
//       });
//     });

//     // it('Then returns an empty object when `music` is passed in', (done) => {
//     //   mockAdapter.onGet(url).reply(200, { sources: mockedSources });
//     //   const sourcesResponse = NewsApi.getSources('music');

//     //   expect(sourcesResponse).toEqual({});
//     // });

//     // it('Then returns one object when `politics` is passed in', (done) => {
//     //   mockAdapter.onGet(url).reply(200, { sources: mockedSources });
//     //   const sourcesResponse = NewsApi.getSources('politics');
//     //   const politicsCategory =
//     //     {
//     //       id: 'breitbart-news',
//     //       name: 'Breitbart News',
//     //       description: 'Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.',
//     //       url: 'http://www.breitbart.com',
//     //       category: 'politics',
//     //       language: 'en',
//     //       country: 'us',
//     //       urlsToLogos: {
//     //         small: '',
//     //         medium: '',
//     //         large: ''
//     //       },
//     //       sortBysAvailable: [
//     //         'top',
//     //         'latest'
//     //       ]
//     //     };

//     //   expect(sourcesResponse).toEqual(politicsCategory);
//     // });
//   });
// });

// /* global expect jest test */
// import newsApi from '../../src/js/utils/newsApi';

// describe('News Api Axios Call', () => {
//   test('should returns a promise resolve from the Api', () => {
//     const spy = jest.spyOn(newsApi, 'get');
//     const sources = newsApi.getSources();

//     expect(spy).toHaveBeenCalled();
//     expect(sources).toEqual(Promise.resolve());
//   });
// });

import newsApi from '../../src/js/utils/newsApi';

describe('News Api  Call', () => {
  it('should make a get request', () => {
    const spy = jest.spyOn(newsApi, 'get');
    // const sources = newsApi.getSources();

    expect(spy).toHaveBeenCalled();
    // expect(sources).toEqual(Promise.resolve());
  });
});

