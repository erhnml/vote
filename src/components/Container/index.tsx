import React from 'react';
import styled from 'styled-components';

export interface ContainerProps  { 
  children: React.ReactNode
}

const Container = ({ children }:ContainerProps) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export default Container;
