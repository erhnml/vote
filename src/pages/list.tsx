import React from 'react';

import Layout from '../components/Layout';
import ListItem from '../components/ListItem';
import data from '../data.json';

const List = () => {
  return (
    <Layout>
      {
        data.map(post => <ListItem post={post}/>)
      }
    </Layout>
  );
}

export default List;
