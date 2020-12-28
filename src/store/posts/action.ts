import { GetPosts, Posts, GET_POSTS } from './types';

export const getPosts = (postsData: Posts): GetPosts => {
  return {
    type: GET_POSTS,
    posts: postsData,
  };
};
