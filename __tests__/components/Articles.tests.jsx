import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Articles from '../../src/js/components/Articles.jsx';
import mockedArticles from '../../__mocks__/mockArticles.json';

xdescribe('Articles Component test suite', () => {
  describe('When the `Articles` component renders', () => {
    // const items = ['Learn react', 'rest', 'go out'];

    it('should match its empty snapshot', () => {
      const tree = renderer.create(
        <Articles />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
