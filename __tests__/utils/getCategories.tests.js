import expect from 'expect';
import Categories from '../../src/js/utils/getCategories';
import mockedSources from '../../__mocks__/mockSources.json';

const categories = new Categories();
const getAllCategories = Categories.getCategories(mockedSources);
const filterCategories = Categories.filterCategories(getAllCategories);
const sortCategories = categories.sortCategories(mockedSources);

describe('Categories Class Test Suite', () => {
  describe('Given an array of objects', () => {
    describe('When `getCategories` takes the object as params', () => {
      const allCategories =
        ['general',
          'sport',
          'technology',
          'business',
          'politics',
          'business',
          'science-and-nature',
          'science-and-nature'];

      it('Then it returns an array of all categories for each object', () => {
        expect(allCategories).toEqual(getAllCategories);
      });
    });

    describe('When `filterCategories` takes the array of `allCategories` as params', () => {
      const filteredCategories =
        ['general',
          'sport',
          'technology',
          'business',
          'politics',
          'science-and-nature'];

      it('Then it returns the unique categories in that array', () => {
        expect(filteredCategories).toEqual(filterCategories);
      });
    });

    describe('When `sortedCategories` takes in an object', () => {
      const sortedCategories =
        ['business',
          'general',
          'politics',
          'science-and-nature',
          'sport',
          'technology'];
      it('', () => {
        expect(sortedCategories).toEqual(sortCategories);
      });
    });
  });
});

