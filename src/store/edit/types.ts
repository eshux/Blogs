export const SHOW_EDIT = 'SHOW_EDIT';

export type ShowEdit = {
  type: typeof SHOW_EDIT;
  active: boolean;
};

export type AllActions = ShowEdit;
