export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';

export type SetActiveUser = {
  type: typeof SET_ACTIVE_USER;
  id: number;
};

export type AllActions = SetActiveUser;
