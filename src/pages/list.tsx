import React, {useState, useContext} from 'react';
import Select from 'react-select'
import styled from 'styled-components';
import { useToasts } from 'react-toast-notifications'

import Layout from '../components/Layout';
import ListItem from '../components/ListItem';
import Pagination from '../components/Pagination';
import LinkButton from '../components/LinkButton';
import { Plus } from '../components/icons';
import Modal from '../components/Modal';
import {PostContext} from '../context/PostContext';
import { PostType } from '../types';

const options = [
  { value: 'lowToHige', label: 'Low to Hige' },
  { value: 'higeToLow', label: 'Hige to Low' },
]
interface OptionType {
  value: string | null,
  label: string
}

const List = () => {
  const { posts, removePost } = useContext(PostContext);
  const { addToast } = useToasts()
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [order, setOrder] = useState<OptionType | null>(null);
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);

  const getPostList = () => {
    const start = (currentPage - 1) * 5;
    const end = currentPage * 5;
    if(order) {
      const { value } = order;
      posts.sort((a,b) => b.lastVoteTime - a.lastVoteTime).sort((a,b) => {
        return value === 'lowToHige' ? a.vote - b.vote : b.vote - a.vote
      })
    }
    return posts.slice(start, end)
  }
  
  const handleRemove = (post: PostType) => {
    setSelectedPost(post);
    setIsModalVisible(true)
  }

  const handleOk = () => {
    if(selectedPost) {
      const { id } = selectedPost;
      removePost(id);
      addToast('Deleted!', {
        appearance: 'success',
        autoDismiss: true,
      })
      setSelectedPost(null)
      setIsModalVisible(false)
    }
  }

  return (
    <Layout>
      <Wrapper>
        <StyledSelect 
          options={options} 
          placeholder="Order by Vote"
          value={order}
          onChange={(val: OptionType) => setOrder(val)}
        />
        <LinkButton 
          to="/create" 
          title="Add New Link" 
          icon={<Plus />}
        />
      </Wrapper>
      {
       getPostList().map((post:PostType, index) => (
          <ListItem 
            key={index} 
            post={post} 
            onRemove={handleRemove}
          />
        ))
      }
      <Pagination 
        total={posts.length}
        changeStep={(step) => setCurrentPage(step)}
        currentPage={currentPage}
      />
      <Modal 
        isModalVisible={isModalVisible} 
        onClose={() => setIsModalVisible(false)} 
        onOk={handleOk}
        title="Remove Link">
        <h3>Do you want to remove:</h3>
        {selectedPost && <span>{selectedPost.name}</span>}
      </Modal>
    </Layout>
  );
}

const StyledSelect = styled(Select)`
  margin-bottom: 20px;
  width: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default List;
