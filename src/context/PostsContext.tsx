import { createContext } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostsContextData {
  posts: Post[];
}

export const postsContextDefaultValue: PostsContextData = {
  posts: [],
};

export const PostsContext = createContext<PostsContextData>(
  postsContextDefaultValue
);
