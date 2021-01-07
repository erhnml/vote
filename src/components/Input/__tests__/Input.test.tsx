
import React from 'react';

import Input from '../index';
import { mountWithTheme } from '../../../helpers/test';

describe('Input', () => {
  it('renders correctly', () => {
    expect(<Input name="linkName" />).toMatchSnapshot();
  });

  it('mount correctly', () => {
    expect(() => mountWithTheme(<Input name="linkName" />)).not.toThrow();
  });

  it('should render the label', () => {
    const wrapper = mountWithTheme(<Input name="linkName" label="Link URL" />);
    const label = wrapper.find('span').text(); 
    expect(label).toBe('Link URL:');
  })

  it('should trigger event correctly', () => {
    const onChange = jest.fn();
    const wrapper = mountWithTheme(<Input name="linkName" onChange={onChange} />);
    wrapper.find('input').simulate('change')
    expect(onChange).toBeCalled();
  });
})
