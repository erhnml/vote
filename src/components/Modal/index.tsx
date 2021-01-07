import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import {Close} from '../icons';

interface ModalProps {
  isModalVisible: boolean,
  title: string,
  children: React.ReactNode,
  onClose?: () => void,
  onOk?: () => void,
}

const Modal = ({
  isModalVisible,
  title,
  onClose,
  onOk,
  children
}:ModalProps) => {
  return (
    <Wrapper isModalVisible={isModalVisible}>
      <StyledModal  isModalVisible={isModalVisible}>
        <Header>
          <Title>{title}</Title>
          <CloseIcon onClick={onClose} />
        </Header>
        <Content>
          {children}
        </Content>
        <Footer>
          <Button title="OK" onClick={onOk} />
          <Button title="Cancel" onClick={onClose} />
        </Footer>
      </StyledModal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;
  ${({ isModalVisible }:{isModalVisible: boolean}) => !isModalVisible ? `
      opacity: 0;
  ` : `
    opacity: 1;
  `}
`;
const StyledModal = styled.div`
  width: 500px;
  margin-top: -200px;
  transition: all .2s ease-in-out;
  ${({ isModalVisible }:{isModalVisible: boolean}) => !isModalVisible ? `
      transform: translateY(-100px);
  ` : `
    transform: translateY(0px);
  `}
`;
const Header = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
`;
const Content = styled.div`
  background-color: white;
  padding: 20px;
`;
const Title = styled.span`
  color: white;
`;
const CloseIcon = styled(Close)`
  cursor: pointer;
`;
export default Modal;
