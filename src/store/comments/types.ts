export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';

export type Comments = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type GetComments = {
  type: typeof GET_COMMENTS;
  comments: Comments[];
};

export type AddComment = {
  type: typeof ADD_COMMENT;
  comment: Comments;
};

export type AllActions = GetComments | AddComment;
