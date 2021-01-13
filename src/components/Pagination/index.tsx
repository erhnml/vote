import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
  changeStep: (step:number) => void,
  currentPage: number,
  total:number
}

interface StyledProps {
  active?: boolean,
  theme: any
}

const Pagination = ({total, changeStep, currentPage}: PaginationProps) => {
  const totalPage = Math.ceil(total / 5);
  return (
    <Wrapper>
      <Step 
        onClick={() => changeStep(currentPage - 1)}
        disabled={currentPage === 1 }
      >
        Prev
      </Step>
      {[...Array(totalPage)].map((e, i) => {
        const pageNumber = i + 1;
        return (
          <Step
            key={i}
            onClick={() => changeStep(pageNumber)} 
            active={pageNumber === currentPage}
          >
          <span>{pageNumber}</span>
        </Step>
        )
      })}
      <Step 
        onClick={() => changeStep(currentPage + 1)}
        disabled={currentPage === totalPage }
      >
        Next
      </Step>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Step = styled.button<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  min-width: 40px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
  border: none;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  ${({active, theme}:StyledProps) => active && `
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
  `}
`;

export default Pagination;
