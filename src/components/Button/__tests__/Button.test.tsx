
import React from 'react';
import { mount } from 'enzyme';
import Button from '../index';

describe('Button', () => {
  it('renders correctly', () => {
    expect(<Button title="Add" />).toMatchSnapshot();
  });

  it('mount correctly', () => {
    expect(() => mount(<Button title="Add" />)).not.toThrow();
  });

  it('should trigger event correctly', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Button title="Add" onClick={onClick} />);
    wrapper.find('button').simulate('click')
    expect(onClick).toBeCalled();
  });
})
