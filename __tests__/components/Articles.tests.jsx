import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Articles from '../../src/js/components/Articles.jsx';

const sortBys = ['top', 'latest'];
const sourceKey = 'al-jazeera-english';

// Set items in Local Storage
localStorage.setItem('sourceKey', sourceKey);
localStorage.setItem('sortBys', JSON.stringify(sortBys));

describe('Articles Component Test Suite', () => {
  test('should match the Articles component snapshot', () => {
    const component = mount(<Articles />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
