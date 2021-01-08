import React from 'react';
import styled from 'styled-components';
interface ButtonProps {
  title: string,
  onClick?: React.MouseEventHandler<HTMLElement>,
  type?: "button" | "submit" 
}

const Button = ({title, type, onClick}:ButtonProps) => {
  return (
    <StyledButton 
      type={type} 
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  min-width: 100px;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
`;

export default Button;
