import React from 'react';
import styled from 'styled-components';

import Container from '../Container';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderContent>
          <LogoWrapper>
            <LogoTitle>hepsiburada.com</LogoTitle>
            <LogoSubTitle>her şey ayağına gelsin</LogoSubTitle>
          </LogoWrapper>
        </HeaderContent>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.orange};
`;
const HeaderContent = styled.div`
  padding: 15px 0px;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const LogoTitle = styled.span`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;
const LogoSubTitle = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

export default Header;
