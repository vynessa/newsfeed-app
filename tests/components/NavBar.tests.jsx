// import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import MemberList from '../../src/js/components/NavBar.jsx';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;
 
describe('MemberList', () => {
  it('renders', () => {
    var element = TestUtils.renderIntoDocument(<MemberList />);
    expect(element).toBeTruthy();
  });
});