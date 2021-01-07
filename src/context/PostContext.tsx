import React, {useState, createContext, } from 'react';
import data from '../data.json';


interface PostType {
  id: number,
  name: string,
  link: string,
  vote: number
}
type ContextType = {
  posts: PostType[],
  removePost: (id:number) => void,
  addPost: (post:PostType) => void,
  upVote: (id:number) => void,
  downVote: (id: number) => void
}
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
    const postData = {
      ...post,
      id: Math.floor(Math.random() * 100),
      vote: 0
    }
    setPosts([...posts, postData])
  }
  const upVote = (id: number) => {
    console.log('up')
    const modifyPosts = posts.map(( post ) => {
      if(post.id === id) {
        post.vote = post.vote + 1
      }
      return post;
    })
    setPosts(modifyPosts)
  }
  const downVote = (id: number) => {
    const modifyPosts = posts.map(( post ) => {
      if(post.id === id) {
        post.vote = post.vote - 1
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