import React from 'react';
import styled from 'styled-components';

interface InputProps {
  label?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  value?: string,
  name: string
}

const Input = ({ label, onChange, value, name }:InputProps) => {
  return (
    <Wrapper>
      <Label>{label}:</Label>
      <StyledInput 
        name={name} 
        onChange={onChange} 
        value={value}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Label = styled.span`
  margin-bottom: 5px;
`;
const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  height: 35px;
  padding-left: 10px;
`;

export default Input;
