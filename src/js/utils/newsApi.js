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
  static getSources(category) {
    if (category) {
      const apiUrl = `https://newsapi.org/v1/sources?category=${category}`;
      return axios.get(apiUrl)
        .then((response) => {
          return response.data.sources;
        })
        .catch((error) => {
          return error;
        });
    }
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
   * @param {string} sortBy
   * @returns {object} articles
   */
  static getArticles(source, sortBy) {
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
