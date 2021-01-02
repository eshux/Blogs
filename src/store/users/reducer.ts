import { UserData } from '../../data/userData';
import { AllActions, SET_ACTIVE_USER } from './types';

const initialState: UserData = {
  userId: 0,
  userName: '',
  password: '',
  isAdmin: false,
};

export const userReducer = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case SET_ACTIVE_USER: {
      return action.activeUser;
    }
    default:
      return state;
  }
};
