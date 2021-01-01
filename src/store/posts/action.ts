import { Dispatch } from 'redux';
import axios from 'axios';
import { GetPosts, Posts, GET_POSTS } from './types';

export const getPosts = (postsData: Posts): GetPosts => {
  return {
    type: GET_POSTS,
    posts: postsData,
  };
};

export const getPostData = () => {
  return async (dispatch: Dispatch) => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const filtered = data.data.filter(
      (item: Object, index: number) => index < 15
    );
    dispatch(getPosts(filtered));
  };
};
