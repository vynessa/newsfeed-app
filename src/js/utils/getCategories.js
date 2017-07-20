/**
 * @description Categories class to handle getting all categories for each source
 * @class Categories
 */
class Categories {
  /**
   * @description Get all categories for each sources and push into an array
   * @static
   * @param {object} sources
   * @returns {array} allCategories
   * @memberof Categories
   */
  static getCategories(sources) {
    const allCategories = [];
    let category = [];
    // console.log('All Sources', sources);
    Object.keys(sources).forEach((source) => {
      category = sources[source].category;
      allCategories.push(category);
    });
    return allCategories;
  }
  /**
   * @description Remove duplicate categories and ret
   * @static
   * @param {array} categories
   * @returns {array} categories
   * @memberof Categories
   */
  static filterCategories(categories) {
    return categories.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  }
  /**
   * @description Get all categories for each sources and push into an array
   * @static
   * @param {object} allSources
   * @returns {array}
   * @memberof Categories
   */
  sortCategories(allSources) {
    let sortedCategories = [];
    sortedCategories = Categories.getCategories(allSources);
    sortedCategories = Categories.filterCategories(sortedCategories).sort();
    // localStorage.setItem('categories', sortedCategories);
    return sortedCategories;
  }
}

export default Categories;

