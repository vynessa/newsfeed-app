import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Sources from '../../src/js/components/Sources.jsx';
import mockedSources from '../../__mocks__/mockSources.json';

describe('Sources Component test suite', () => {
  describe('When the `Sources` component renders', () => {
    // const items = ['Learn react', 'rest', 'go out'];

    it('should match its empty snapshot', () => {
      const tree = renderer.create(
        <Sources sources={[]}/>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  it('should add an item based on the value in the state', () => {
    const component = shallow(<Sources />);
    // const preventDefault = jest.fn();
    component.setState({
      mockedSources
    });
    component.find('div').simulate('card');
    expect(toJson(component)).toMatchSnapshot();
    // expect(preventDefault).toBeCalled();
  });

  it('should pass a selected value to the onChange function', () => {
    const component = shallow(<Sources sortCategory={this.sortCategory}/>);
    component.find('input').simulate('change', { target: {
      value: 'Change function' }
    });

    expect(toJson(component)).toMatchSnapshot();
  });

  // describe('Given the Sources Component test suite', () => {
  //   describe('When the `Sources` component is loaded', () => {
  //     it('Then renders Sources', () => {
  //       const div = document.createElement('app');
  //       ReactDOM.render(<Sources/>, div);
  //     });
  //   });
  // });
});

    // describe('When the `Sources` component renders', () => {
    //   // const items = ['Learn react', 'rest', 'go out'];

    //   it('should match its empty snapshot', () => {
    //     const tree = renderer.create(
    //       <Sources />
    //     ).toJSON();

    //     expect(tree).toMatchSnapshot();
    //   });
    // });

    // describe('When the sources state has data', () => {
    //   it('Then ', () => {
    //     const
    //   });
    // });
