import React, {useState, useContext} from 'react';

import Layout from '../components/Layout';
import ListItem from '../components/ListItem';
import Pagination from '../components/Pagination';
import Modal from '../components/Modal';

import {PostContext} from '../context/PostContext';

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(true);

  const {posts} = useContext(PostContext);

  const start = (currentPage - 1) * 5;
  const end = currentPage * 5;

  interface PostType {
    id: number,
    name: string,
    link: string,
    vote: number
  }
  return (
    <Layout>
      {
        posts.slice(start, end).map((post:PostType, index) => (
          <ListItem key={index} post={post}/>
        ))
      }
      <Pagination 
        total={posts.length}
        onNext={() => setCurrentPage(currentPage + 1)}
        onPrev={() => setCurrentPage(currentPage - 1)}
        changeStep={(step) => setCurrentPage(step)}
        currentPage={currentPage}
      />
      <Modal isModalVisible={isModalVisible} onClose={() => setIsModalVisible(false)} title="Remove Link">
        <span>test</span>
      </Modal>
    </Layout>
  );
}

export default List;
