import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import Sources from '../../src/js/components/Sources.jsx';
import mockedSources from '../../__mocks__/mockSources.json';

const categoriesList = ['buisness', 'sport', 'entertainment'];
// const sourceId = 'the-next-web';
// const sortBy = ['top', 'latest'];

// localStorage.setItem('sourceKey', sourceId);
// localStorage.setItem('sortBys', JSON.stringify(sortBy));

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

    // it('should contain all sources based on the value in the state', () => {
    //   const doneChange = jest.fn();
    //   const wrapper = mount(<Sources sources={mockedSources} doneChange={doneChange} />);

    //   const p = wrapper.find('input');
    //   p.simulate('click');
    //   expect(doneChange).toBeCalledWith(1);
    // });
    // xit('should add an item based on the value in the state', () => {
    //   const component = shallow(<Sources />);
    //   const preventDefault = jest.fn();
    //   component.setState({
    //     items
    //   });
    //   component.find('form').simulate('submit', { preventDefault });
    //   expect(toJson(component)).toMatchSnapshot();
    //   expect(preventDefault).toBeCalled();
    // });

    // it('should add all categories based on the value in the state', () => {
    //   const component = shallow(<Sources categories=""/>);
    //   component.setState({
    //     categoriesList
    //   });
    //   component.find('Input').simulate('change');
    //   expect(toJson(component)).toMatchSnapshot();
    // });

    // it('should add all search term based on the value in the state', () => {
    //   const search = 'Mabel';
    //   const component = mount(<Sources />);
    //   component.setState({
    //     search
    //   });
    //   component.props.find('input').simulate('change');
    //   expect(toJson(component)).toMatchSnapshot();
    // });
  });
});

  // it('should pass a selected value to the onChange function', () => {
  //   const component = shallow(<Sources sortCategory={this.sortCategory}/>);
  //   component.find('input').simulate('change', { target: {
  //     value: 'Change function' }
  //   });

  //   expect(toJson(component)).toMatchSnapshot();
  // });

  // describe('Given the Sources Component test suite', () => {
  //   describe('When the `Sources` component is loaded', () => {
  //     it('Then renders Sources', () => {
  //       const div = document.createElement('app');
  //       ReactDOM.render(<Sources/>, div);
  //     });
  //   });
  // });

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
    // })
