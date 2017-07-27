/**
 * @description
 * @class stringManipulation
 */
class StringFilter {
  static typeCheck(str) {
    const message = 'Please enter a string';
    if (str.length === 0) {
      return false;
    } else if (typeof str !== 'string') {
      return message;
    }
    return true;
  }

  static removeChar(str) {
    return StringFilter.typeCheck(str) === true ?
      str.replace(/([^a-z A-Z 0-9]+)/g, ' ').toLowerCase()
      :
      StringFilter.typeCheck(str);
  }

  static capitalize(str) {
    return StringFilter.typeCheck(str) === true ?
    str.replace(/\b\w/g, (l) => {
      return l.toUpperCase();
    })
    :
    StringFilter.typeCheck(str);
  }

  filteredStr(str) {
    if (StringFilter.typeCheck(str) === true) {
      let newStr = '';
      newStr = StringFilter.removeChar(str);
      newStr = StringFilter.capitalize(newStr);
      return newStr;
    }
    return StringFilter.typeCheck(str);
  }
}

export default StringFilter;
