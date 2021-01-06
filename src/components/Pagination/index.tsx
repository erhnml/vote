import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
  onNext: () => void,
  onPrev: () => void,
  changeStep: (step:number) => void,
  currentPage: number,
  total:number
}

interface StyledProps {
  active?: boolean
}

const Pagination = ({total, onNext, onPrev, changeStep, currentPage}: PaginationProps) => {
  const totalPage = Math.ceil(total / 5);
  return (
    <Wrapper>
      {currentPage > 1 && <Step onClick={onPrev}>Prev</Step>}
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
      {currentPage < totalPage && <Step onClick={onNext}>Next</Step>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Step = styled.div`
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
