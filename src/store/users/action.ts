import { UserData } from '../../data/userData';
import { SET_ACTIVE_USER, SetActiveUser } from './types';

export const setActiveUser = (activeUser: UserData): SetActiveUser => {
  return {
    type: SET_ACTIVE_USER,
    activeUser,
  };
};
