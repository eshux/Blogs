import { GET_COMMENTS, AllActions, Comments, ADD_COMMENT } from './types';

const initialStore: [] | Comments[] = [];

export const commentReducer = (state = initialStore, action: AllActions) => {
  switch (action.type) {
    case GET_COMMENTS: {
      return action.comments;
    }
    case ADD_COMMENT: {
      const newState = [...state, action.comment];
      return newState;
    }
    default:
      return state;
  }
};
