import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import ArticlesList from '../../src/js/components/ArticlesList.jsx';
import mockedArticles from '../../__mocks__/mockArticles.json';

xdescribe('ArticlesList Component Test Suite', () => {
  describe('When the `ArticlesList` component renders', () => {
    it('should match its empty snapshot', () => {
      mount(<ArticlesList />);
      // const component = mount(<ArticlesList />);
      // const tree = toJson(component);

      // expect(tree).toMatchSnapshot();
    });
  });
});
