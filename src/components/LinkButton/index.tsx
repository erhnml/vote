import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface LinkButtonProps {
  to: string,
  icon?: React.ReactNode,
  title: string
}

const LinkButton = ({to, icon, title}:LinkButtonProps) => {
  return (
    <StyledLink to={to}>
      {
        icon
      }
      {title}
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: black;
  text-decoration: none;
`;

export default LinkButton;
