
import React from 'react';
import {  mount } from 'enzyme';
import {  MemoryRouter } from "react-router-dom";
import LinkButton from '../index';
import { Delete } from '../../icons';

describe('LinkButton', () => {
  it('renders correctly', () => {
    expect(
      <MemoryRouter>
        <LinkButton to="/" title="Return to List" />
      </MemoryRouter>
    ).toMatchSnapshot();
  });

  it('mount correctly', () => {
    expect(() => mount(
      <MemoryRouter>
        <LinkButton to="/" title="Return to List" />
      </MemoryRouter>
    )).not.toThrow();
  });

  it('should render with icon', () => {
    const wrapper = mount(
      <MemoryRouter>
        <LinkButton 
          to="/"
          title="Return to List"
          icon={<Delete />} 
        />
      </MemoryRouter>
      );
    expect(wrapper.find(Delete)).toHaveLength(1);
  });
})
