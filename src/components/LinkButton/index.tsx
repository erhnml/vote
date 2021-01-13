import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface LinkButtonProps {
  to: string,
  icon?: React.ReactNode,
  title: string,
}

const LinkButton = ({to, icon, title}:LinkButtonProps) => {
  return (
    <StyledLink to={to}>
      { icon }
      <Title icon={icon}>{title}</Title>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 4px 15px;
  color: black;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.lightGray};
  font-size: 14px;
  border-radius: 3px;
  height: 38px;
`;

const Title = styled.span`
    ${({ icon }:{icon: React.ReactNode}) => icon && `
    margin-left: 10px;
  `}
`;

export default LinkButton;
