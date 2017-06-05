import axios from 'axios';

/**
 * API class
 * @class
 */
class NewsApi {
  /**
   * Gets all news sources
   * @function
   * @param {string} apiUrl
   * @returns {object} sources
   */
  static getSources() {
    const apiUrl = 'https://newsapi.org/v1/sources';
    axios.get(apiUrl)
      .then((response) => {
        return response.data.sources;
      })
      .catch((error) => {
        return error;
      });
  }
  /**
   * Get articles for every news source, sorted by either the latest or top headlines
   * @function
   * @param {string} source
   * @param {string} apiKey
   * @param {string} sortBy
   * @returns {object} articles
   */
  static getHeadlines(source, sortBy) {
    const apiUrl = 'https://newsapi.org/v1/articles?source=';
    const newLink = `${apiUrl}${source}&apiKey=${apiKey}`;
    axios.get(newLink)
      .then((response) => {
        return (response.data.articles);
      })
      .catch((error) => {
        return (error);
      });
  }
}

export default NewsApi;
