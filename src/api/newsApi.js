import axios from 'axios';

const getSources = (category = '', lang = '', callback) => {
  const apiUrl = 'https://newsapi.org/v1/sources';

  if (category === null || lang === null) {
    axios.get(apiUrl)
      .then((response) => {
        callback(response.data.sources);
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (lang.length > 0) {
    const langUrl = `${apiUrl}?language=${lang}`;
    axios.get(langUrl)
      .then((response) => {
        callback(response.data.sources);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    const catUrl = `${apiUrl}?category=${category}`;
    axios.get(catUrl)
      .then((response) => {
        callback(response.data.sources);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const getArticles = (source, apiKey, sortBy) => {
  apiKey = 'b3af0273f37245359b9131db78464ad4';

  axios.get();
};

