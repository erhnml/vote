
import React from 'react';

import Modal, { CloseIcon } from '../index';
import { mountWithTheme } from '../../../helpers/test';

describe('Modal', () => {
  it('renders correctly', () => {
    expect(
      <Modal 
        isModalVisible={true}
        title="Add New Link"
      />
    ).toMatchSnapshot();
  });

  it('mount correctly', () => {
    expect(() => mountWithTheme(
      <Modal 
        isModalVisible={true}
        title="Add New Link"
      />
    )).not.toThrow();
  });

  it('should trigger event correctly', () => {
    const mockFn = jest.fn();
    const wrapper = mountWithTheme(
      <Modal 
        isModalVisible={true}
        title="Add New Link"
        onClose={mockFn}
        onOk={mockFn}
      />
    );
   const button = wrapper.find('button');
   button.at(0).simulate('click');
   button.at(1).simulate('click');
   wrapper.find(CloseIcon).simulate('click');
    expect(mockFn.mock.calls.length).toBe(3);
  });

})
