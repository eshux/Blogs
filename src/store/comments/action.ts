import { Dispatch } from 'redux';
import axios from 'axios';
import {
  GetComments,
  Comments,
  GET_COMMENTS,
  ADD_COMMENT,
  AddComment,
} from './types';

export const getComments = (commentsData: Comments[]): GetComments => {
  return {
    type: GET_COMMENTS,
    comments: commentsData,
  };
};

export const getCommentsData = () => {
  return async (dispatch: Dispatch) => {
    const data = await axios.get(
      'https://jsonplaceholder.typicode.com/comments'
    );
    const filteredComments = data.data.filter((item: Object, index: number) => {
      return index < 75;
    });
    dispatch(getComments(filteredComments));
  };
};

export const addComment = (addCommentData: Comments): AddComment => {
  return {
    type: ADD_COMMENT,
    comment: addCommentData,
  };
};
