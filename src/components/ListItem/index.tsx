import React from 'react';

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
  return (
    <p>
      {name}
    </p>
  );
}

export default ListItem;
