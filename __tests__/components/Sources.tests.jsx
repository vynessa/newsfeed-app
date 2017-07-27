import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Sources from '../../src/js/components/Sources.jsx';
import mockedSources from '../../__mocks__/mockSources.json';

describe('Sources Component Test Suite', () => {
  describe('When the `Sources` component renders', () => {
    it('should match its empty snapshot', () => {
      const tree = renderer.create(<Sources />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should contain all sources based on the value in the state', () => {
      const component = shallow(<Sources />);
      component.setState({
        mockedSources
      });
      component.find('div').simulate('card');
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});

