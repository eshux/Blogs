export const GET_COMMENTS = 'GET_COMMENTS';

export type Comments = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}[];

export type GetComments = {
  type: typeof GET_COMMENTS;
  comments: Comments;
};

export type AllActions = GetComments;
