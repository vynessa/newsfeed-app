import axios from 'axios';

/**
 * API class
 * @class
 */
class NewsApi {
  /**
   * Gets all news sources
   * @method
   * @param {string} apiUrl
   * @returns {object} sources
   */
  static getSources() {
    const apiUrl = 'https://newsapi.org/v1/sources';
    return axios.get(apiUrl)
      .then((response) => {
        return response.data.sources;
      })
      .catch((error) => {
        return error;
      });
  }
  /**
   * Get articles for every news source, sorted by either the latest or top headlines
   * @method
   * @param {string} source
   * @param {string} apiKey
   * @param {string} sortBy
   * @returns {object} articles
   */
  static getArticles(source, sortBy = 'latest') {
    const apiUrl = 'https://newsapi.org/v1/articles?source=';
    const apiKey = 'b3af0273f37245359b9131db78464ad4';
    const newLink = `${apiUrl}${source}&sortBy=${sortBy}&apiKey=${apiKey}`;
    return axios.get(newLink)
      .then((response) => {
        return response.data.articles;
      })
      .catch((error) => {
        return error;
      });
  }
}

export default NewsApi;
