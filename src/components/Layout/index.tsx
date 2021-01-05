import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import Header from '../Header';

export  interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({children}:LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Content>
          {children}
        </Content>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Content = styled.div``;

export default Layout;
