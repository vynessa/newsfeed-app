import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import Articles from '../../src/js/components/Articles.jsx';
import mockedArticles from '../../__mocks__/mockArticles.json';
import '../../__mocks__/browserMocks';

describe('Articles Component Test Suite', () => {
  localStorage.setItem('sourceKey', 'abc-news-au');
  describe('When the `Articles` component renders', () => {
    it('should match its empty snapshot', () => {
      mount(<Articles />);
      // const component = mount(<Articles />);
      // const tree = toJson(component);

      // expect(tree).toMatchSnapshot();
    });

    // it('should contain the appropriate props', () => {
    //   // const sourceKey = localStorage.getItem('sourcekey');
    //   const component =
    //   mount(<Articles articles={mockedArticles}/>);
    //   expect(component.node.props.articles).toEqual('');
    //   // component.setProps({ title: 'the-next-web' });
    //   expect(component.node.props.articles).toEqual('the-next-web');
    // });
  });
});
