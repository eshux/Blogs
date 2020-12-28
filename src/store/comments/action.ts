import { GetComments, Comments, GET_COMMENTS } from './types';

export const getComments = (commentsData: Comments): GetComments => {
  return {
    type: GET_COMMENTS,
    comments: commentsData,
  };
};
