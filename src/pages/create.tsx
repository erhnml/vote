import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import { useToasts } from 'react-toast-notifications'

import Layout from '../components/Layout';
import LinkButton from '../components/LinkButton';
import Input from '../components/Input';
import Button from '../components/Button';
import { LeftArrow } from '../components/icons';
import {PostContext} from '../context/PostContext';

const Create = () => {
  const { addToast } = useToasts()
  const { posts, addPost } = useContext(PostContext);
  const [state, setState] = useState({
    linkName: '',
    linkURL: ''
  })
  const { linkName, linkURL } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!linkName || !linkURL ) {
     return addToast('Link Name and Link URL required!', {
        appearance: 'error',
        autoDismiss: true,
      })
    }
    const post = {
      id: posts[posts.length - 1].id + 1,
      name: linkName,
      link: linkURL,
      vote: 0,
      lastVoteTime: 0
    };
    addPost(post)
    addToast('Post Added!', {
      appearance: 'success',
      autoDismiss: true,
    })
    setState({
      linkName: '',
      linkURL: ''
    })
  }

  return (
    <Layout>
      <HeaderButton>
        <LinkButton 
          to="/" 
          title="Return to List"
          icon={<LeftArrow />}
        />
      </HeaderButton>
      <Title>Add New Link</Title>
      <Form onSubmit={handleSubmit}>
        <Input name="linkName" label="Link Name" value={linkName}   onChange={handleChange} />
        <Input name="linkURL" label="Link URL" value={linkURL} onChange={handleChange} />
        <ButtonWrapper>
          <Button title="Add" type="submit" />
        </ButtonWrapper>
      </Form>
    </Layout>
  );
}

const Form = styled.form``;
const Title = styled.h3`
  margin-top: 50px;
  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const HeaderButton = styled.div`
  max-width: 200px;
`

export default Create;
