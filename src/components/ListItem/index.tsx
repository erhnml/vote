import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

import { Up, Down } from '../icons';
export interface ListItemProps  { 
  post: {
    id: number,
    name: string,
    link: string,
    vote: number
  }
}

const ListItem = ({post}: ListItemProps) => {
  const {id, name, link, vote} = post;
  const handleVote = () => alert('Voted')
  return (
    <Wrapper >
      <Content to={`/detail/${id}`}>
        <VoteCount>
          <span>{vote}</span>
        </VoteCount>
        <TitleWrapper>
          <Name>{name}</Name>
          <Target>({link})</Target>
        </TitleWrapper>
      </Content>
    <VoteWrapper>
      <Vote onClick={handleVote}>
        <Up />
      </Vote>
      <Vote  onClick={handleVote}>
        <Down />
      </Vote>
    </VoteWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-bottom: 20px;
  border-bottom: 1px solid #c4c3c3;
  padding-bottom: 10px;
`;
const Content = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
const VoteCount = styled.div`
  margin-right: 30px;
  background-color: ${({ theme }) => theme.colors.gray};;
  width: 35px;
  height: 35px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-weight: bold;
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 500;
  font-size: 18px;
`;
const Target = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 500;
  font-size: 18px;
`;
const VoteWrapper = styled.div`
  display: flex;
`;
const Vote = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  align-items: center;
  cursor: pointer;
`;

export default ListItem;
