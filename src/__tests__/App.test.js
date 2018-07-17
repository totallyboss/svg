import React from 'react';
import { shallow } from 'enzyme';
import SVGConverter, { Input, Output } from '../App';

describe('SVGConverter', () => {

  it('should render the SVG Converter component', () => {
    const wrapper = shallow(<SVGConverter/>);
    expect(wrapper.length).toBe(1);
  });

  it('should render input and output components', () => {
    const wrapper = shallow(<SVGConverter/>);
    expect(wrapper.find(Input).length).toBe(1);
    expect(wrapper.find(Output).length).toBe(1);
  });

  it('click on convert button calls function', () => {

  });

});