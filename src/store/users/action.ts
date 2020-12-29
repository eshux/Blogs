import { SET_ACTIVE_USER, SetActiveUser } from './types';

export const setActiveUser = (id:number): SetActiveUser => {
  return {
    type: SET_ACTIVE_USER,
    id,
  };
};
