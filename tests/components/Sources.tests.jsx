import React from 'react';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import Sources from '../../src/js/components/Sources.jsx';

describe('Sources Component', () => {
  it('renders', () => {
    const sources = TestUtils.renderIntoDocument(<Sources />);
    expect(sources).toExist();
  });
});
