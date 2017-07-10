import React from 'react';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import NavBar from '../../src/js/components/NavBar.jsx';

describe('NavBar', () => {
  it('renders', () => {
    const navbar = TestUtils.renderIntoDocument(<NavBar />);
    expect(navbar).toExist();
  });
});
