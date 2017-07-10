import React from 'react';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import App from '../../src/js/components/App.jsx';

describe('App component', () => {
  it('renders App component', () => {
    const app = TestUtils.renderIntoDocument(<App />);
    expect(app).toExist();
  });
});
