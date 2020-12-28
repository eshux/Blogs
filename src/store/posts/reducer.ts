import { GET_POSTS, AllActions, Posts } from './types';

const initialStore: [] | Posts = [];

export const postReducer = (state = initialStore, action: AllActions) => {
  switch (action.type) {
    case GET_POSTS: {
      return action.posts;
    }
    default:
      return state;
  }
};
