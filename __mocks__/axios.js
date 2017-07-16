import mockApi from './mockSources.json';

const sourcesApiCall = {
  get() {
    return Promise.resolve(mockApi);
  }
};

export default sourcesApiCall;
