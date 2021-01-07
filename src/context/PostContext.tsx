import React, {useState, createContext, } from 'react';
import data from '../data.json';
import { PostType, ContextType } from '../types';



interface Props {
  children: React.ReactNode
}

export const PostContext = createContext<ContextType>({
  posts: [],
  removePost: () => {},
  addPost: () => {},
  upVote: () => {},
  downVote: () => {},
});

export const PostContextProvider = ({ children }:Props) => {
  const [posts, setPosts] = useState<PostType[]>(data);

  const removePost = (id: number) => {
    const filter = posts.filter((post) => post.id !== id)
    setPosts(filter)
  }

  const addPost = (post: PostType) => {
    setPosts([post, ...posts])
  }

  const upVote = (id: number) => {
    console.log('up')
    const modifyPosts = posts.map(( post ) => {
      if(post.id === id) {
        const timestamp = + new Date();
        post.vote = post.vote + 1;
        post.lastVoteTime = timestamp;
      }
      return post;
    })
    setPosts(modifyPosts)
  }
  const downVote = (id: number) => {
    const modifyPosts = posts.map(( post ) => {
      if(post.id === id) {
        post.vote = post.vote - 1;
        post.lastVoteTime = + new Date();
      }
      return post;
    })
    setPosts(modifyPosts)
  }
  return (
    <PostContext.Provider value={{posts, removePost, addPost, upVote, downVote}}>
      {children}
    </PostContext.Provider>
  );
};


export default PostContextProvider;