import { SHOW_COMMENTS, ShowComments } from './types';

export const showComments = (active: boolean): ShowComments => {
  return {
    type: SHOW_COMMENTS,
    active,
  };
};
