import React from 'react';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import SourcesList from '../../src/js/components/SourcesList.jsx';

describe('Sources Component', () => {
  it('renders', () => {
    const sourcesList = TestUtils.renderIntoDocument(<SourcesList />);
    expect(sourcesList).toExist();
  });
});
