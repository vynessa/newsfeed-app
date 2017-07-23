import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Articles from '../../src/js/components/Articles.jsx';
import mockedArticles from '../../__mocks__/mockArticles.json';

const sortBys = ['top', 'latest'];
const sourceKey = 'al-jazeera-english';
localStorage.setItem('sourceKey', sourceKey);
localStorage.setItem('sortBys', JSON.stringify(sortBys));

describe('Articles Component Test Suite', () => {
  test('should match the Articles snapshot', () => {
    const component = mount(<Articles />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });

  // test('', () => {
  //   const title = shallow(<Articles />);
  //   expect(title.find('h1').text()).toEqual('Headlines from Al Jazeera English');
  // });
  // test('should contain all articles based on the value in the state', () => {
  //   // const sourceId = localStorage.getItem('sourceKey');
  //   // const sortOpt = JSON.parse(localStorage.sortBys);
  //   const component = mount(<Articles articles={mockedArticles}/>);
  //   component.setState({
  //     mockedArticles
  //   });
  //   component.find('div').simulate('card');
  //   expect(toJson(component)).toMatchSnapshot();
  // });
});
