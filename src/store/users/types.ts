import { UserData } from '../../data/userData';

export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';

export type SetActiveUser = {
  type: typeof SET_ACTIVE_USER;
  activeUser: UserData;
};

export type AllActions = SetActiveUser;
