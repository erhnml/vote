import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
  changeStep: (step:number) => void,
  currentPage: number,
  total:number
}

interface StyledProps {
  active?: boolean
}

const Pagination = ({total, changeStep, currentPage}: PaginationProps) => {
  const totalPage = Math.ceil(total / 5);
  return (
    <Wrapper>
      {currentPage > 1 &&  (
        <Step onClick={() => changeStep(currentPage - 1)}>
          Prev
        </Step>
      )}
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
      {currentPage < totalPage && (
        <Step onClick={() => changeStep(currentPage + 1)}>
          Next
        </Step>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
export const Step = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
  ${({active}:StyledProps) => active && `
    background-color: black;
    color: white;
  `}
`;
export default Pagination;
