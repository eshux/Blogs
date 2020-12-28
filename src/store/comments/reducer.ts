import { GET_COMMENTS, AllActions, Comments } from './types';

const initialStore: [] | Comments = [];

export const commentReducer = (state = initialStore, action: AllActions) => {
  switch (action.type) {
    case GET_COMMENTS: {
      return action.comments;
    }
    default:
      return state;
  }
};
