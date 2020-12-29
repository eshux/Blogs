import { userData } from '../../data/userData';
import { AllActions, SET_ACTIVE_USER } from './types';

const initialState = userData;

export const userReducer = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case SET_ACTIVE_USER: {
      return state.map((item) => {
        if (item.userId === action.id) {
          // eslint-disable-next-line no-param-reassign
          item.isActive = true;
        }
        return item;
      });
    }
    default:
      return state;
  }
};
