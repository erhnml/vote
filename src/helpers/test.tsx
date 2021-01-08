import React from 'react';
import Theme from '../theme';
import { mount } from 'enzyme';

export function mountWithTheme(child: React.ReactElement) {
  return mount(child, {
      wrappingComponent: ({ children }) => <Theme>{children}</Theme>,
  });
}
