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
  addPost: (post:PostType) => void
}
interface Props {
  children: React.ReactNode
}
export const PostContext = createContext<ContextType>({
  posts: [],
  removePost: () => {},
  addPost: () => {},
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
  return (
    <PostContext.Provider value={{posts, removePost, addPost}}>
      {children}
    </PostContext.Provider>
  );
};


export default PostContextProvider;