import React, {useState, useContext} from 'react';
import Select from 'react-select'
import styled from 'styled-components';

import Layout from '../components/Layout';
import ListItem from '../components/ListItem';
import Pagination from '../components/Pagination';
import Modal from '../components/Modal';

import {PostContext} from '../context/PostContext';

const options = [
  { value: 'lowToHige', label: 'Low to Hige' },
  { value: 'hideToLow', label: 'Hige to Low' },
]

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [order, setOrder] = useState<OptionType | null>(null);

  const {posts, upVote, downVote} = useContext(PostContext);

  const start = (currentPage - 1) * 5;
  const end = currentPage * 5;

  interface PostType {
    id: number,
    name: string,
    link: string,
    vote: number
  }
  interface OptionType {
    value: string | null,
    label: string
  }
  const getPostList = () => {
    let postData = posts;
    if(order) {
      const { value } = order;
      postData.sort((a,b) => value === 'lowToHige' ? a.vote - b.vote : b.vote - a.vote)
    }
    return postData.slice(start, end)
  }
  return (
    <Layout>
      <StyledSelect 
        options={options} 
        placeholder="Order by Vote"
        value={order}
        onChange={(val: OptionType) => setOrder(val)}
      />
      {
       getPostList().map((post:PostType, index) => (
          <ListItem 
            key={index} 
            post={post} 
            onUpVote={(id) => upVote(id)}
            onDownVote={(id) => downVote(id)}
          />
        ))
      }
      <Pagination 
        total={posts.length}
        onNext={() => setCurrentPage(currentPage + 1)}
        onPrev={() => setCurrentPage(currentPage - 1)}
        changeStep={(step) => setCurrentPage(step)}
        currentPage={currentPage}
      />
      <Modal 
        isModalVisible={isModalVisible} 
        onClose={() => setIsModalVisible(false)} 
        title="Remove Link">
        <span>test</span>
      </Modal>
    </Layout>
  );
}

const StyledSelect = styled(Select)`
  margin-bottom: 20px;
  width: 200px;
`;
export default List;
