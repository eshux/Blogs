export const GET_POSTS = 'GET_POSTS';

export type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
}[];

export type GetPosts = {
  type: typeof GET_POSTS;
  posts: Posts;
};

export type AllActions = GetPosts;
