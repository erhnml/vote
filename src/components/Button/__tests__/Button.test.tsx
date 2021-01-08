
import React from 'react';
import { mountWithTheme } from '../../../helpers/test';
import Button from '../index';

describe('Button', () => {
  it('renders correctly', () => {
    expect(<Button title="Add" />).toMatchSnapshot();
  });

  it('mount correctly', () => {
    expect(() => mountWithTheme(<Button title="Add" />)).not.toThrow();
  });

  it('should trigger event correctly', () => {
    const onClick = jest.fn();
    const wrapper = mountWithTheme(<Button title="Add" onClick={onClick} />);
    wrapper.find('button').simulate('click')
    expect(onClick).toBeCalled();
  });
})
