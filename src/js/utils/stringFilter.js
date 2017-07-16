/**
 * @description
 * @class stringManipulation
 */
class StringFilter {
  static valueChecker(str) {
    const message = 'Please enter a string';
    if (str.length === 0) {
      return false;
    } else if (typeof str !== 'string') {
      return message;
    }
    return true;
  }

  static removeChar(str) {
    return StringFilter.valueChecker(str) === true ?
      str.replace(/([^a-z A-Z 0-9]+)/g, ' ').toLowerCase()
      :
      StringFilter.valueChecker(str);
  }

  static capitalize(str) {
    return StringFilter.valueChecker(str) === true ?
    str.replace(/\b\w/g, (l) => {
      return l.toUpperCase();
    })
    :
    StringFilter.valueChecker(str);
  }

  filteredStr(str) {
    if (StringFilter.valueChecker(str) === true) {
      let newStr = '';
      newStr = StringFilter.removeChar(str);
      newStr = StringFilter.capitalize(newStr);
      return newStr;
    }
    return StringFilter.valueChecker(str);
  }
}

export default StringFilter;
