import React, {useState} from 'react';

import Layout from '../components/Layout';
import ListItem from '../components/ListItem';
import Pagination from '../components/Pagination';

import data from '../data.json';

const List = () => {
  const [currentPage, setCurrentPage] = useState(3);

  const start = (currentPage - 1) * 5;
  const end = currentPage * 5;

  return (
    <Layout>
      {
        data.slice(start, end).map(post => <ListItem post={post}/>)
      }
      <Pagination 
        total={data.length}
        onNext={() => setCurrentPage(currentPage + 1)}
        onPrev={() => setCurrentPage(currentPage - 1)}
        changeStep={(step) => setCurrentPage(step)}
        currentPage={currentPage}
      />
    </Layout>
  );
}

export default List;
