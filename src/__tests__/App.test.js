import React from 'react';
import { shallow } from 'enzyme';
import SVGConverter from '../App';

describe('SVGConverter', () => {

  it('should render the SVG Converter component', () => {
    const wrapper = shallow(<SVGConverter/>);
    expect(wrapper.length).toBe(1);
  });

  it('click on convert button calls function', () => {

  });

});