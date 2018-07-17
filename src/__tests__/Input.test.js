import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';

describe('Input', () => {

  it('should render the Input component', () => {
    const wrapper = shallow(<Input/>);
    expect(wrapper.length).toBe(1);
  });

  it('should display a textarea and a button', () => {
    const wrapper = shallow(<Input/>);
    expect(wrapper.find('textarea').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('clicking on button should call a function', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<Input/>);
    const button = wrapper.find('button');

    button.simulate('click');

    mockFunction.toHaveBeenCalledTimes(1);

    console.log(button.debug());
  });
});