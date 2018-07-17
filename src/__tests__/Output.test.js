import React from 'react';
import { shallow } from 'enzyme';
import Output from '../Output';

describe('Output', () => {

  it('should render the Output component', () => {
    const wrapper = shallow(<Output/>);
    expect(wrapper.length).toBe(1);
  });

  it('should display a textarea', () => {
    const wrapper = shallow(<Output/>);
    expect(wrapper.find('textarea').length).toBe(1);
  });

});