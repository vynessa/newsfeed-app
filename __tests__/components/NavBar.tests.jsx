// // import React from 'react';
// // import { mount } from 'enzyme';
// // import NavBar from '../../src/js/components/NavBar.jsx';

// const expect = require('expect');

// describe('Addition', () => {
//   it('knows that 2 and 2 make 4', () => {
//     expect(2 + 2).toBe(4);
//   });
// });

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

// var React = require('react');
// var TestUtils = require('react/lib/ReactTestUtils');
// var MemberList = require('../MemberList.jsx');

// describe('MemberList', () => {
//   it('renders', () => {
//     var element = TestUtils.renderIntoDocument(<MemberList />);
//     expect(element).toBeTruthy();
//   });
// });
