import { SHOW_EDIT, ShowEdit } from './types';

export const showEdit = (active: boolean): ShowEdit => {
  return {
    type: SHOW_EDIT,
    active,
  };
};
