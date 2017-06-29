import axios from 'axios';
/**
 * API class
 * 
 * @class NewsApi
 */
class NewsApi {
  /**
   * @description Gets all news sources
   * @method
   * @param {string} category
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
    const apiUrl = 'https://newsapi.org/v1/sources?language=en';
    return axios.get(apiUrl)
      .then((response) => {
        return response.data.sources;
      })
      .catch((error) => {
        return error;
      });
  }
  /**
   * @description Get articles for every news source, sorted by either the latest or top headlines
   * @method
   * @param {string} source
   * @param {string} sortBy
   * @returns {object} articles
   */
  static getArticles(source, sortBy) {
    const apiUrl = 'https://newsapi.org/v1/articles?source=';
    const apiKey = process.env.NEWS_API_KEY;
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
