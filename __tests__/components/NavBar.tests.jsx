import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import NavBar from '../../src/js/components/NavBar.jsx';

describe('NavBar Component Test Suite', () => {
  test('should match the NavBar snapshot', () => {
    const component = mount(<NavBar />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
