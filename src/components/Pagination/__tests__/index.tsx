
import React from 'react';

import Pagination, { Step } from '../index';
import { mountWithTheme } from '../../../helpers/test';

describe('Pagination', () => {
  it('renders correctly', () => {
    expect(
      <Pagination 
        changeStep={() =>{}}
        currentPage={1}
        total={10}
      />
    ).toMatchSnapshot();
  });

  it('mount correctly', () => {
    expect(() => mountWithTheme(
      <Pagination 
        changeStep={() =>{}}
        currentPage={1}
        total={10}
      />
    )).not.toThrow();
  });

  it('should trigger event correctly', () => {
    const mockFn = jest.fn();
    const wrapper = mountWithTheme(
      <Pagination 
        changeStep={mockFn}
        currentPage={2}
        total={20}
      />
    );
    const step = wrapper.find(Step);
    step.at(0).simulate('click')
    step.at(1).simulate('click')
    step.at(5).simulate('click')
    expect(mockFn.mock.calls.length).toBe(3);
  });

  it('should has correct step count', () => {
    const wrapper = mountWithTheme(
      <Pagination 
        changeStep={() => {}}
        currentPage={2}
        total={127}
      />
    );
    expect(wrapper.find(Step).length).toBe(28)
  })
  
})
