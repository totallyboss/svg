import React from 'react';
import { shallow } from 'enzyme';
import Input, { TextArea, Button } from '../Input';

describe('Input', () => {

  it('should render the Input component', () => {
    const wrapper = shallow(<Input/>);
    expect(wrapper.length).toBe(1);
  });

  it('should display a textarea and a button', () => {
    const wrapper = shallow(<Input/>);
    expect(wrapper.find(TextArea).length).toBe(1);
    expect(wrapper.find(Button).length).toBe(1);
  });

  it('clicking on button should call a function', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Button onClick={mockClick}/>);
    wrapper.simulate('click');
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

});