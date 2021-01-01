export const SHOW_COMMENTS = 'SHOW_COMMENTS';

export type ShowComments = {
  type: typeof SHOW_COMMENTS;
  active: boolean;
};

export type AllActions = ShowComments;
