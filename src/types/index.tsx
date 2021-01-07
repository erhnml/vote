export interface PostType {
  id: number,
  name: string,
  link: string,
  vote: number,
  lastVoteTime: number
}

export interface ListItemProps  { 
  post: PostType,
  onRemove?: (post:PostType) => void
}

export type ContextType = {
  posts: PostType[],
  removePost: (id:number) => void,
  addPost: (post:PostType) => void,
  upVote: (id:number) => void,
  downVote: (id: number) => void
}