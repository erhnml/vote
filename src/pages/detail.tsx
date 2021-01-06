import React, {useState} from 'react';
import styled from 'styled-components';
import { useToasts } from 'react-toast-notifications'
import Layout from '../components/Layout';
import LinkButton from '../components/LinkButton';
import Input from '../components/Input';
import Button from '../components/Button';

import { LeftArrow } from '../components/icons';

const Detail = () => {
  const { addToast } = useToasts()
  const [state, setState] = useState({
    linkName: 'sd',
    linkURL: ''
  })
  const { linkName, linkURL } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({...state, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!linkName || !linkURL ) {
      addToast('Link Name and Link URL required!', {
        appearance: 'error',
        autoDismiss: true,
      })
    }
  }
  return (
    <Layout>
      <LinkButton 
        to="/" 
        title="Return to List"
        icon={<LeftArrow />}
      />
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
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
export default Detail;
