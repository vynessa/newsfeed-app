import mockApiSources from './mockSources.json';

const ApiCall = {
  get() {
    return Promise.resolve(mockApiSources);
  }
};

export default ApiCall;
