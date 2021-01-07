
import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import {  MemoryRouter } from "react-router-dom";

import { mountWithTheme } from '../../../helpers/test';
import ListItem, { DeleteIcon } from '../index';

const post = {
  id: 1,
  name: "The future of Unreal Tournament begings today",
  link: "https://unrealengine.com",
  vote: 0,
  lastVoteTime: 0
}

function ListItemWrapper({ children }:{children: React.ReactNode}) {
  return (
    <ToastProvider>
      <MemoryRouter>
        {children}
      </MemoryRouter>
    </ToastProvider>
  )
}

describe('Button', () => {
  it('renders correctly', () => {
    expect(
      <ListItemWrapper>
        <ListItem post={post} />
      </ListItemWrapper>
    ).toMatchSnapshot();
  });

  it('mount correctly', () => {
    expect(() => mountWithTheme(
      <ListItemWrapper>
        <ListItem post={post} />
      </ListItemWrapper>
    )).not.toThrow();
  });

  it('should trigger remove event correctly', () => {
    const mockFn = jest.fn();
    const wrapper = mountWithTheme(
      <ListItemWrapper>
        <ListItem post={post} onRemove={mockFn} />
      </ListItemWrapper>
    );
    wrapper.simulate('mouseover');  
    wrapper.find(DeleteIcon).simulate('click');
    expect(mockFn).toBeCalled();
  });

})
