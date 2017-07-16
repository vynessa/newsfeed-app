import expect from 'expect';
import StringFilter from '../../src/js/utils/stringFilter';

// Create new instance of StringFilter class
const strFilter = new StringFilter();

describe('String Filter Class', () => {
  describe('Given a String', () => {
    describe('When `valueChecker` takes a parameter which is a string', () => {
      it('Then returns true', () => {
        const oldStr = 'the old man';
        const checker = StringFilter.valueChecker(oldStr);
        expect(checker).toBe(true);
      });

      it('Then returns message if parameter is an object', () => {
        const oldStr = { name: 'Vanessa' };
        const checker = StringFilter.valueChecker(oldStr);
        expect(checker).toEqual('Please enter a string');
      });

      it('Then returns false if parameter is an empty string', () => {
        const emptyString = '';
        const checker = StringFilter.valueChecker(emptyString);
        expect(checker).toBe(false);
      });
    });

    describe('When `removeChar` takes a given string with special characters', () => {
      it('Then returns a string with no special character', () => {
        const str = 'the-science-prOject';
        const removeCharacters = StringFilter.removeChar(str);
        const newStr = 'the science project';
        expect(newStr).toEqual(removeCharacters);
      });

      it('Then returns a message when an empty string is passed into it', () => {
        const str = '';
        const removeCharacters = StringFilter.removeChar(str);
        expect(removeCharacters).toEqual(false);
      });

      it('Then returns a message when an array is passed into it', () => {
        const str = [0.7, 'Hello'];
        const removeCharacters = StringFilter.removeChar(str);
        expect(removeCharacters).toEqual('Please enter a string');
      });
    });

    describe('When `capitalize` takes in a string', () => {
      const emptyStr = '';
      const oldStr = 'i want to eat';
      const newStr = 'I Want To Eat';

      it('Then returns the first letter of each word in the string as capital', () => {
        const capitalizedStr = StringFilter.capitalize(oldStr);
        expect(newStr).toEqual(capitalizedStr);
      });

      it('Then returns false when an empty string is passed into it', () => {
        const capitalizedStr = StringFilter.capitalize(emptyStr);
        expect(capitalizedStr).toEqual(false);
      });

      it('Then returns message when an array is passed into it', () => {
        const oldStr =
          [
            {
              test: 'Date'
            }
          ];
        const capitalizedStr = StringFilter.capitalize(oldStr);
        expect(capitalizedStr).toEqual('Please enter a string');
      });
    });

    describe('When `filteredStr` takes in a string with special characters to be capitalized',
    () => {
      const emptyStr = '';
      const oldStr = 'the-science-prOjeCt';
      const newStr = 'The Science Project';

      it('Then returns a filtered and capitalized string', () => {
        const filteredString = strFilter.filteredStr(oldStr);
        expect(newStr).toEqual(filteredString);
      });

      it('Then returns false if string is empty', () => {
        const filteredString = strFilter.filteredStr(emptyStr);
        expect(filteredString).toEqual(false);
      });
    });
  });
});
