import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useToasts } from 'react-toast-notifications'

import {PostContext} from '../../context/PostContext';
import { Up, Down, Delete } from '../icons';
import { ListItemProps } from '../../types';

const ListItem = ({post, onRemove}: ListItemProps) => {
  const {upVote, downVote} = useContext(PostContext);
  const { addToast } = useToasts()
  const [hover ,setHover] = useState(false)
  const {id, name, link, vote} = post;

  const handleUp =  (id: number) => {
    upVote(id);
    addToast('You voted up!', {
      appearance: 'success',
      autoDismiss: true,
    })
  }

  const handleDown = (id: number) => {
    downVote(id);
    addToast('You voted down!', {
      appearance: 'success',
      autoDismiss: true,
    })
  }

  return (
    <Wrapper 
      onMouseOver={() =>setHover(true)}
      onMouseLeave={() =>setHover(false)}
      hover={hover}
    >
      <Content>
        <VoteCount>
          <span>{vote}</span>
        </VoteCount>
        <TitleWrapper>
          <Name>{name}</Name>
          <Target>({link})</Target>
        </TitleWrapper>
      </Content>
    <VoteWrapper>
      {
        hover && (
          <DeleteIcon 
            className="delete-button"
            onClick={() => onRemove && onRemove(post)} 
          />
        )
      }
      <Vote onClick={() => handleUp(id)}>
        <Up />
      </Vote>
      <Vote onClick={() => handleDown(id)}>
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
  margin-bottom: 10px;
  border-bottom: 1px solid #c4c3c3;
  padding-bottom: 10px;
  background-color: ${
    ({ hover, theme }:{hover: boolean, theme: any}) => hover ? theme.colors.lightOrange : 'transparent'
  };
  padding: 10px 10px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
const VoteCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-weight: bold;
  margin-right: 30px;
  background-color: ${({ theme }) => theme.colors.gray};;
  color: white;
  padding: 10px 12px;
  min-width: 35px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    margin-right: 10px;
  }
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 500;
  font-size: 18px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Target = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
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
  pointer-events: click;
`;

export const DeleteIcon = styled(Delete)`
  cursor: pointer;
`;

export default ListItem;
