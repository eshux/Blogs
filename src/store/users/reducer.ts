import { UserData } from '../../data/userData';
import { AllActions, SET_ACTIVE_USER } from './types';

const initialState = {};

export const userReducer = (
  state = initialState,
  action: AllActions
): {} | UserData => {
  switch (action.type) {
    case SET_ACTIVE_USER: {
      return action.activeUser;
    }
    default:
      return state;
  }
};
